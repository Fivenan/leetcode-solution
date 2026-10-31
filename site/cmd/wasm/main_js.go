//go:build js && wasm

package main

import (
	"encoding/json"
	"fmt"
	"syscall/js"

	"leetcode.explorer/generated"
	"leetcode.explorer/internal/trace"
)

func main() {
	run := js.FuncOf(func(this js.Value, values []js.Value) any {
		result := trace.Execute(func() (any, error) {
			if len(values) != 2 || values[0].Type() != js.TypeNumber || values[1].Type() != js.TypeString {
				return nil, fmt.Errorf("expected problem ID and JSON arguments")
			}
			var args []json.RawMessage
			if err := json.Unmarshal([]byte(values[1].String()), &args); err != nil {
				return nil, fmt.Errorf("invalid arguments: %w", err)
			}
			return generated.Run(values[0].Int(), args)
		})
		data, err := json.Marshal(result)
		if err != nil {
			fallback, _ := json.Marshal(trace.Result{Steps: []trace.Frame{}, Error: "Cannot encode algorithm result: " + err.Error()})
			return string(fallback)
		}
		return string(data)
	})
	defer run.Release()
	js.Global().Set("explorerRun", run)
	js.Global().Set("explorerReady", true)
	select {}
}
