// Package trace records bounded, detached snapshots of algorithm execution.
// Execute calls are serialized; the instrumented algorithms themselves run synchronously.
package trace

import (
	"fmt"
	"reflect"
	"sort"
	"sync"
)

const MaxSteps = 1200
const MaxOperations = 20000

type Frame struct {
	Line     int            `json:"line"`
	Function string         `json:"function"`
	Vars     map[string]any `json:"vars"`
}
type Result struct {
	Steps     []Frame `json:"steps"`
	Output    any     `json:"output"`
	Error     string  `json:"error,omitempty"`
	Truncated bool    `json:"truncated"`
}
type recorder struct {
	result     Result
	operations int
}
type budgetExceeded struct{}

var execution sync.Mutex
var state sync.Mutex
var active *recorder

func Execute(run func() (any, error)) (result Result) {
	execution.Lock()
	defer execution.Unlock()
	r := &recorder{result: Result{Steps: []Frame{}}}
	state.Lock()
	active = r
	state.Unlock()
	defer func() {
		state.Lock()
		defer state.Unlock()
		active = nil
		if problem := recover(); problem != nil {
			if _, ok := problem.(budgetExceeded); ok {
				r.result.Error = "Execution stopped after reaching the operation budget"
				r.result.Truncated = true
			} else {
				r.result.Error = fmt.Sprintf("Algorithm panic: %v", problem)
			}
		}
		result = r.result
	}()
	output, err := run()
	state.Lock()
	if err != nil {
		r.result.Error = err.Error()
	} else {
		r.result.Output = output
	}
	state.Unlock()
	return
}

func Step(line int, function string, vars map[string]any) {
	state.Lock()
	defer state.Unlock()
	if active == nil {
		return
	}
	active.operations++
	if active.operations > MaxOperations {
		panic(budgetExceeded{})
	}
	if len(active.result.Steps) >= MaxSteps {
		active.result.Truncated = true
		return
	}
	values := make(map[string]any, len(vars))
	for key, value := range vars {
		v := reflect.ValueOf(value)
		if v.IsValid() && v.Kind() == reflect.Func {
			continue
		}
		remaining := 512
		values[key] = snapshot(v, 0, map[uintptr]bool{}, &remaining)
	}
	active.result.Steps = append(active.result.Steps, Frame{line, function, values})
}

func snapshot(v reflect.Value, depth int, seen map[uintptr]bool, remaining *int) any {
	*remaining = *remaining - 1
	if depth > 12 || *remaining < 0 {
		return "…"
	}
	if !v.IsValid() {
		return nil
	}
	switch v.Kind() {
	case reflect.Interface:
		if v.IsNil() {
			return nil
		}
		return snapshot(v.Elem(), depth, seen, remaining)
	case reflect.Pointer:
		if v.IsNil() {
			return nil
		}
		p := v.Pointer()
		if seen[p] {
			return "[cycle]"
		}
		seen[p] = true
		defer delete(seen, p)
		return snapshot(v.Elem(), depth+1, seen, remaining)
	case reflect.Slice, reflect.Array:
		if v.Kind() == reflect.Slice && v.IsNil() {
			return nil
		}
		n := v.Len()
		if n > 64 {
			n = 64
		}
		items := make([]any, 0, n+1)
		for i := 0; i < n; i++ {
			items = append(items, snapshot(v.Index(i), depth+1, seen, remaining))
		}
		if v.Len() > n {
			items = append(items, "…")
		}
		return items
	case reflect.Map:
		if v.IsNil() {
			return nil
		}
		keys := v.MapKeys()
		sort.Slice(keys, func(i, j int) bool { return fmt.Sprint(keys[i]) < fmt.Sprint(keys[j]) })
		items := map[string]any{}
		for i, key := range keys {
			if i >= 64 {
				items["…"] = "truncated"
				break
			}
			items[fmt.Sprint(key)] = snapshot(v.MapIndex(key), depth+1, seen, remaining)
		}
		return items
	case reflect.Struct:
		items := map[string]any{}
		for i := 0; i < v.NumField(); i++ {
			if v.Type().Field(i).IsExported() {
				items[v.Type().Field(i).Name] = snapshot(v.Field(i), depth+1, seen, remaining)
			}
		}
		return items
	case reflect.String:
		s := v.String()
		if len(s) > 256 {
			return s[:256] + "…"
		}
		return s
	case reflect.Bool:
		return v.Bool()
	case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64:
		return v.Int()
	case reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64:
		return v.Uint()
	case reflect.Float32, reflect.Float64:
		return v.Float()
	default:
		return "[unsupported]"
	}
}
