package input

import (
	"encoding/json"
	"reflect"
	"strings"
	"testing"
)

func raw(s string) []json.RawMessage {
	var a []json.RawMessage
	if err := json.Unmarshal([]byte(s), &a); err != nil {
		panic(err)
	}
	return a
}

func TestRejectUnsafeInputs(t *testing.T) {
	cases := []struct {
		id    int
		args  string
		arity int
	}{
		{6, `["abc",0]`, 2}, {19, `[[1],2]`, 2}, {25, `[[1],0]`, 2}, {29, `[4,0]`, 2},
		{10, `["a","*a"]`, 2}, {10, `["a","a**"]`, 2},
		{36, `[["..."]]`, 1}, {37, `[[".........",".........",".........",".........",".........",".........",".........",".........","........."]]`, 1},
		{39, `[[0,2],4]`, 2}, {39, `[[-1,2],4]`, 2}, {46, `[[1,2,3,4,5,6,7,8]]`, 1},
		{48, `[[[1,2],[3]]]`, 1}, {51, `[12]`, 1}, {69, `[-1]`, 1}, {79, `[["AB","C"],"A"]`, 2},
		{49, `[["UPPER"]]`, 1}, {87, `["A","A"]`, 2}, {88, `[[1],2,[],0]`, 4},
		{92, `[[1],1,2]`, 3}, {4, `[[],[]]`, 2}, {4, `[[2,1],[3]]`, 2}, {1, `[null,2]`, 2},
		{1, `[[1,null],2]`, 2}, {1, `[[1],2,3]`, 2}, {1, `[[1],2]`, 1},
	}
	for _, c := range cases {
		if err := Validate(c.id, raw(c.args), c.arity); err == nil {
			t.Errorf("problem %d accepted %s", c.id, c.args)
		}
	}
	if err := Validate(3, []json.RawMessage{json.RawMessage(`"` + strings.Repeat("x", 5000) + `"`)}, 1); err == nil {
		t.Error("accepted oversized JSON")
	}
}

func TestJudgeShapes(t *testing.T) {
	l, err := List(json.RawMessage(`[1,2,3]`))
	if err != nil || !reflect.DeepEqual(Output(l), []int{1, 2, 3}) {
		t.Fatalf("list round trip: %v %v", Output(l), err)
	}
	for _, s := range []string{`[]`, `[1,null,2,3]`, `[2,1,3]`} {
		tree, err := Tree(json.RawMessage(s))
		if err != nil {
			t.Fatal(err)
		}
		b, err := json.Marshal(Output(tree))
		if err != nil || string(b) != s {
			t.Fatalf("tree round trip %s became %s (%v)", s, b, err)
		}
	}
	for _, s := range []string{`[null,1]`, `[1,null,null,2]`} {
		if _, err := Tree(json.RawMessage(s)); err == nil {
			t.Errorf("accepted unreachable tree %s", s)
		}
	}
	b, err := Board(json.RawMessage(`["AB","CD"]`))
	if err != nil || !reflect.DeepEqual(Output(b), []string{"AB", "CD"}) {
		t.Fatal("board round trip failed")
	}
}
