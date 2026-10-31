package main

import (
	"fmt"
	"go/ast"
	"go/importer"
	"go/parser"
	"go/token"
	"go/types"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

// A tiny importer checks instrumented scopes without depending on generated adapters.
type traceImporter struct{}

func (traceImporter) Import(path string) (*types.Package, error) {
	if path != "leetcode.explorer/internal/trace" {
		return importer.Default().Import(path)
	}
	p := types.NewPackage(path, "trace")
	params := types.NewTuple(types.NewVar(0, p, "line", types.Typ[types.Int]), types.NewVar(0, p, "name", types.Typ[types.String]), types.NewVar(0, p, "vars", types.NewMap(types.Typ[types.String], types.NewInterfaceType(nil, nil).Complete())))
	p.Scope().Insert(types.NewFunc(0, p, "Step", types.NewSignatureType(nil, nil, nil, params, nil, false)))
	p.MarkComplete()
	return p, nil
}
func TestScopesAndOriginalLines(t *testing.T) {
	src := `func run(nums []int) int {
 sum := 0
 var visit func(int) int
 visit = func(n int) int { if n == 0 { return sum }; return visit(n-1) }
 for i, x := range nums { if y := x+i; y > 0 { sum += y } else if x < 0 { sum-- } }
 for j := 0; j < 2; j++ { sum += j }
 { sum := "shadow"; _ = sum }
 switch v := sum; { case v > 1: sum++; default: sum-- }
 return visit(2)
}`
	data, err := instrument([]byte(src), "sample")
	if err != nil {
		t.Fatal(err)
	}
	fset := token.NewFileSet()
	file, err := parser.ParseFile(fset, "generated.go", data, 0)
	if err != nil {
		t.Fatal(err)
	}
	config := types.Config{Importer: traceImporter{}}
	if _, err = config.Check("sample", fset, []*ast.File{file}, nil); err != nil {
		t.Fatalf("scope check: %v\n%s", err, data)
	}
	if !strings.Contains(string(data), `Step(2, "run"`) || !strings.Contains(string(data), `"n": n`) || !strings.Contains(string(data), `"y": y`) {
		t.Fatalf("missing lines or locals:\n%s", data)
	}
}

func TestEmptyLoopReceivesBudgetStep(t *testing.T) {
	data, err := instrument([]byte("func spin() { for {} }"), "sample")
	if err != nil {
		t.Fatal(err)
	}
	if strings.Count(string(data), "__trace.Step(") != 2 {
		t.Fatalf("empty loop lacks iteration step:\n%s", data)
	}
}

func TestOriginalCorpusTypeChecks(t *testing.T) {
	for id := 1; id <= 100; id++ {
		t.Run(fmt.Sprintf("%04d", id), func(t *testing.T) {
			src, err := os.ReadFile(filepath.Join("..", "..", "..", "go", fmt.Sprintf("%04d.go", id)))
			if err != nil {
				t.Fatal(err)
			}
			data, err := instrument(src, "sample")
			if err != nil {
				t.Fatal(err)
			}
			fset := token.NewFileSet()
			file, err := parser.ParseFile(fset, "solution.go", data, 0)
			if err != nil {
				t.Fatal(err)
			}
			judge, err := parser.ParseFile(fset, "judge.go", "package sample; type ListNode struct { Val int; Next *ListNode }; type TreeNode struct { Val int; Left, Right *TreeNode }", 0)
			if err != nil {
				t.Fatal(err)
			}
			config := types.Config{Importer: traceImporter{}}
			if _, err = config.Check("sample", fset, []*ast.File{file, judge}, nil); err != nil {
				t.Fatalf("scope check: %v", err)
			}
		})
	}
}
