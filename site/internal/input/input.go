// Package input converts bounded JSON arguments into the judge's data structures.
package input

import (
	"encoding/json"
	"fmt"
)

type ListNode struct {
	Val  int
	Next *ListNode
}
type TreeNode struct {
	Val         int
	Left, Right *TreeNode
}

func decode[T any](b json.RawMessage) (v T, err error) { err = json.Unmarshal(b, &v); return }
func Int(b json.RawMessage) (int, error)               { return decode[int](b) }
func Float(b json.RawMessage) (float64, error)         { return decode[float64](b) }
func String(b json.RawMessage) (string, error)         { return decode[string](b) }
func Ints(b json.RawMessage) ([]int, error)            { return decode[[]int](b) }
func Strings(b json.RawMessage) ([]string, error)      { return decode[[]string](b) }
func Matrix(b json.RawMessage) ([][]int, error)        { return decode[[][]int](b) }
func Board(b json.RawMessage) ([][]byte, error) {
	rows, err := Strings(b)
	if err != nil {
		return nil, err
	}
	out := make([][]byte, len(rows))
	for i, s := range rows {
		out[i] = []byte(s)
	}
	return out, nil
}
func List(b json.RawMessage) (*ListNode, error) {
	xs, err := Ints(b)
	if err != nil {
		return nil, err
	}
	head := &ListNode{}
	tail := head
	for _, x := range xs {
		tail.Next = &ListNode{Val: x}
		tail = tail.Next
	}
	return head.Next, nil
}
func Lists(b json.RawMessage) ([]*ListNode, error) {
	rows, err := decode[[]json.RawMessage](b)
	if err != nil {
		return nil, err
	}
	out := make([]*ListNode, len(rows))
	for i, row := range rows {
		out[i], err = List(row)
		if err != nil {
			return nil, err
		}
	}
	return out, nil
}
func Tree(b json.RawMessage) (*TreeNode, error) {
	xs, err := decode[[]*int](b)
	if err != nil {
		return nil, err
	}
	if len(xs) == 0 {
		return nil, nil
	}
	if xs[0] == nil {
		if len(xs) > 1 {
			return nil, fmt.Errorf("null root must have no descendants")
		}
		return nil, nil
	}
	root := &TreeNode{Val: *xs[0]}
	q := []*TreeNode{root}
	at := 1
	for len(q) > 0 && at < len(xs) {
		node := q[0]
		q = q[1:]
		for side := 0; side < 2 && at < len(xs); side++ {
			v := xs[at]
			at++
			if v == nil {
				continue
			}
			child := &TreeNode{Val: *v}
			if side == 0 {
				node.Left = child
			} else {
				node.Right = child
			}
			q = append(q, child)
		}
	}
	if at < len(xs) {
		return nil, fmt.Errorf("tree has unreachable entries")
	}
	return root, nil
}

// Output uses editable JSON shapes for pointer structures and character boards.
func Output(v any) any {
	switch x := v.(type) {
	case *ListNode:
		out := []int{}
		for x != nil {
			out = append(out, x.Val)
			x = x.Next
		}
		return out
	case *TreeNode:
		out := []any{}
		if x == nil {
			return out
		}
		q := []*TreeNode{x}
		for len(q) > 0 {
			n := q[0]
			q = q[1:]
			if n == nil {
				out = append(out, nil)
				continue
			}
			out = append(out, n.Val)
			q = append(q, n.Left, n.Right)
		}
		for len(out) > 0 && out[len(out)-1] == nil {
			out = out[:len(out)-1]
		}
		return out
	case []*TreeNode:
		out := make([]any, len(x))
		for i, n := range x {
			out[i] = Output(n)
		}
		return out
	case [][]byte:
		out := make([]string, len(x))
		for i, row := range x {
			out[i] = string(row)
		}
		return out
	default:
		return v
	}
}
