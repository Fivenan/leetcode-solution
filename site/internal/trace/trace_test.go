package trace

import (
	"encoding/json"
	"strings"
	"testing"
)

func TestSnapshotDetachesAndBoundsCycles(t *testing.T) {
	type node struct {
		Val  int
		Next *node
	}
	n := &node{Val: 3}
	n.Next = n
	items := []int{1, 2}
	result := Execute(func() (any, error) {
		Step(7, "sample", map[string]any{"items": items, "node": n, "fn": func() {}})
		items[0] = 9
		return 9, nil
	})
	if result.Error != "" || result.Steps[0].Vars["items"].([]any)[0] != int64(1) {
		t.Fatalf("snapshot changed: %+v", result)
	}
	if _, ok := result.Steps[0].Vars["fn"]; ok {
		t.Fatal("function captured")
	}
	data, err := json.Marshal(result)
	if err != nil {
		t.Fatal(err)
	}
	if !strings.Contains(string(data), "[cycle]") {
		t.Fatalf("cycle not represented: %s", data)
	}
}
func TestBudgetsAndRecovery(t *testing.T) {
	result := Execute(func() (any, error) {
		for {
			Step(1, "loop", nil)
		}
	})
	if !result.Truncated || result.Error == "" || len(result.Steps) != MaxSteps {
		t.Fatalf("budget: %+v", result)
	}
	result = Execute(func() (any, error) { return 42, nil })
	if result.Error != "" || len(result.Steps) != 0 || result.Output != 42 {
		t.Fatalf("recorder leaked: %+v", result)
	}
	result = Execute(func() (any, error) { panic("example") })
	if !strings.Contains(result.Error, "example") {
		t.Fatalf("panic not recovered: %+v", result)
	}
}
