package input

import (
	"bytes"
	"encoding/json"
	"fmt"
	"math"
	"sort"
	"strings"
)

// Validate enforces the algorithms' preconditions before a judge snippet runs.
// The explorer deliberately accepts smaller inputs than the online judge.
func Validate(id int, args []json.RawMessage, arity int) error {
	bad := func(s string) error { return fmt.Errorf("problem %d: %s", id, s) }
	if len(args) != arity {
		return bad(fmt.Sprintf("expected %d positional arguments", arity))
	}
	v := make([]any, len(args))
	total := 0
	var bound func(any, int) error
	bound = func(x any, depth int) error {
		total++
		if depth > 4 || total > 600 {
			return bad("input is too large")
		}
		switch t := x.(type) {
		case string:
			if len(t) > 100 {
				return bad("strings must contain at most 100 ASCII bytes")
			}
			for _, c := range []byte(t) {
				if c > 127 || c == 0 {
					return bad("use ASCII text without NUL bytes")
				}
			}
		case float64:
			if math.Abs(t) > 2147483647 {
				return bad("numbers must fit a signed 32-bit integer")
			}
		case []any:
			if len(t) > 60 {
				return bad("arrays must contain at most 60 entries")
			}
			for _, e := range t {
				if err := bound(e, depth+1); err != nil {
					return err
				}
			}
		case nil:
			if id != 94 && id != 98 && id != 99 && id != 100 {
				return bad("null is only allowed inside tree arrays")
			}
		default:
			return bad("arguments must be numbers, strings, or arrays")
		}
		return nil
	}
	for i, b := range args {
		if len(b) > 4096 {
			return bad("each JSON argument must be at most 4096 bytes")
		}
		if bytes.Equal(bytes.TrimSpace(b), []byte("null")) {
			return bad("use an empty array for an empty list or tree")
		}
		if err := json.Unmarshal(b, &v[i]); err != nil {
			return bad("invalid JSON argument")
		}
		if err := bound(v[i], 0); err != nil {
			return err
		}
	}
	num := func(i int) int { x, _ := v[i].(float64); return int(x) }
	str := func(i int) string { x, _ := v[i].(string); return x }
	ints := func(i int) []int { var a []int; json.Unmarshal(args[i], &a); return a }
	rows := func(i int) [][]int { var a [][]int; json.Unmarshal(args[i], &a); return a }
	texts := func(i int) []string { var a []string; json.Unmarshal(args[i], &a); return a }
	rangeN := func(i, lo, hi int) bool { return num(i) >= lo && num(i) <= hi }
	charset := func(s, allowed string) bool {
		for _, c := range s {
			if !strings.ContainsRune(allowed, c) {
				return false
			}
		}
		return true
	}
	positive := func(a []int) bool {
		for _, n := range a {
			if n < 1 || n > 1000 {
				return false
			}
		}
		return true
	}
	sorted := func(a []int) bool { return sort.IntsAreSorted(a) }
	distinct := func(a []int) bool {
		seen := map[int]bool{}
		for _, n := range a {
			if seen[n] {
				return false
			}
			seen[n] = true
		}
		return true
	}
	// Matrix algorithms index rectangular rows directly.
	switch id {
	case 48, 54, 63, 64, 73, 74:
		a := rows(0)
		if len(a) == 0 || len(a[0]) == 0 {
			return bad("matrix must be nonempty")
		}
		if len(a) > 12 || len(a[0]) > 12 {
			return bad("matrix dimensions must be at most 12")
		}
		for _, row := range a {
			if len(row) != len(a[0]) {
				return bad("matrix must be rectangular")
			}
			for _, n := range row {
				if n < 0 || n > 1000 {
					return bad("matrix values must be between 0 and 1000")
				}
			}
		}
		if id == 48 && len(a) != len(a[0]) {
			return bad("rotation requires a square matrix")
		}
		if id == 63 {
			for _, r := range a {
				for _, n := range r {
					if n > 1 {
						return bad("obstacle cells must be 0 or 1")
					}
				}
			}
		}
		if id == 74 {
			flat := []int{}
			for _, r := range a {
				flat = append(flat, r...)
			}
			if !sorted(flat) {
				return bad("matrix values must be globally sorted")
			}
		}
	case 36, 37, 79, 85:
		a := texts(0)
		if len(a) == 0 || len(a[0]) == 0 {
			return bad("board must be nonempty")
		}
		if len(a) > 12 || len(a[0]) > 12 {
			return bad("board dimensions must be at most 12")
		}
		for _, r := range a {
			if len(r) != len(a[0]) {
				return bad("board must be rectangular")
			}
		}
		if id == 85 {
			for _, r := range a {
				if !charset(r, "01") {
					return bad("binary board requires 0 and 1")
				}
			}
		}
		if id == 79 && (len(a)*len(a[0]) > 25 || len(str(1)) > 10) {
			return bad("word search supports at most 25 cells and 10 letters")
		}
		if id == 36 || id == 37 {
			if len(a) != 9 || len(a[0]) != 9 {
				return bad("Sudoku board must be 9 by 9")
			}
			clues := 0
			var r, c, b [9][9]bool
			for y, row := range a {
				for x, ch := range row {
					if ch == '.' {
						continue
					}
					if ch < '1' || ch > '9' {
						return bad("Sudoku cells must be dots or digits 1 to 9")
					}
					clues++
					n := int(ch - '1')
					box := y/3*3 + x/3
					if id == 37 && (r[y][n] || c[x][n] || b[box][n]) {
						return bad("Sudoku clues conflict")
					}
					r[y][n] = true
					c[x][n] = true
					b[box][n] = true
				}
			}
			if id == 37 && clues < 24 {
				return bad("Sudoku solver needs at least 24 clues")
			}
		}
	}
	switch id {
	case 2:
		for i := 0; i < 2; i++ {
			a := ints(i)
			if len(a) == 0 {
				return bad("digit lists must be nonempty")
			}
			for _, n := range a {
				if n < 0 || n > 9 {
					return bad("list digits must be 0 through 9")
				}
			}
		}
	case 4:
		if len(ints(0))+len(ints(1)) == 0 || !sorted(ints(0)) || !sorted(ints(1)) {
			return bad("use sorted arrays with at least one value")
		}
	case 6:
		if !rangeN(1, 1, 100) {
			return bad("numRows must be 1 through 100")
		}
	case 10:
		p := str(1)
		for i, c := range p {
			if c == '*' && (i == 0 || p[i-1] == '*') {
				return bad("regex * must follow a non-star character")
			}
		}
	case 11, 42, 45, 55, 84:
		for _, n := range ints(0) {
			if n < 0 || n > 1000 {
				return bad("array values must be 0 through 1000")
			}
		}
		if (id == 45 || id == 55) && len(ints(0)) == 0 {
			return bad("jump array must be nonempty")
		}
		if id == 45 {
			reach := 0
			for i, n := range ints(0) {
				if i > reach {
					return bad("last index must be reachable")
				}
				if i+n > reach {
					reach = i + n
				}
			}
		}
	case 12:
		if !rangeN(0, 1, 3999) {
			return bad("Roman numeral input must be 1 through 3999")
		}
	case 13:
		if len(str(0)) == 0 || !charset(str(0), "IVXLCDM") {
			return bad("use a nonempty Roman numeral")
		}
	case 16:
		if len(ints(0)) < 3 || math.Abs(float64(num(1))) > 1000000 {
			return bad("use at least three numbers and a target within +/-1000000")
		}
	case 17:
		if len(str(0)) > 5 || !charset(str(0), "23456789") {
			return bad("use at most five digits from 2 through 9")
		}
	case 19:
		if !rangeN(1, 1, len(ints(0))) {
			return bad("n must address a node in the list")
		}
	case 21:
		if !sorted(ints(0)) || !sorted(ints(1)) {
			return bad("lists must be sorted")
		}
	case 22:
		if !rangeN(0, 0, 6) {
			return bad("n must be 0 through 6")
		}
	case 23:
		for _, r := range rows(0) {
			if !sorted(r) {
				return bad("lists must be sorted")
			}
		}
	case 25:
		if !rangeN(1, 1, 60) {
			return bad("k must be 1 through 60")
		}
	case 26, 34, 35, 80, 82, 83:
		if !sorted(ints(0)) {
			return bad("input must be sorted")
		}
	case 29:
		if num(1) == 0 {
			return bad("divisor must not be zero")
		}
	case 30:
		a := texts(1)
		if len(a) > 10 {
			return bad("use at most 10 words")
		}
		if len(a) > 0 {
			if len(a[0]) == 0 {
				return bad("words must not be empty")
			}
			for _, s := range a {
				if len(s) != len(a[0]) {
					return bad("words must have equal lengths")
				}
			}
		}
	case 33, 81:
		a := ints(0)
		desc := 0
		for i := range a {
			if len(a) > 1 && a[i] > a[(i+1)%len(a)] {
				desc++
			}
		}
		if desc > 1 || (id == 33 && !distinct(a)) {
			return bad("use a rotated sorted array with distinct values for problem 33")
		}
	case 38:
		if !rangeN(0, 1, 10) {
			return bad("n must be 1 through 10")
		}
	case 39, 40:
		if !positive(ints(0)) || len(ints(0)) > 12 || !rangeN(1, 0, 30) {
			return bad("use at most 12 positive candidates (1 to 1000), target 0 to 30")
		}
		if id == 39 && !distinct(ints(0)) {
			return bad("candidates must be distinct")
		}
	case 43:
		for i := 0; i < 2; i++ {
			if len(str(i)) == 0 || len(str(i)) > 30 || !charset(str(i), "0123456789") {
				return bad("use nonempty decimal strings up to 30 digits")
			}
		}
	case 46, 47:
		if len(ints(0)) > 7 {
			return bad("permutations support at most 7 values")
		}
		if id == 46 && !distinct(ints(0)) {
			return bad("values must be distinct")
		}
	case 49:
		for _, s := range texts(0) {
			if !charset(s, "abcdefghijklmnopqrstuvwxyz") {
				return bad("anagram words must be lowercase a-z")
			}
		}
	case 50:
		x, _ := v[0].(float64)
		if math.Abs(x) > 100 || math.Abs(float64(num(1))) > 100 || x == 0 && num(1) < 0 || math.IsInf(math.Pow(x, float64(num(1))), 0) {
			return bad("use |x| and |n| at most 100 and a finite result")
		}
	case 51, 52:
		if !rangeN(0, 1, 6) {
			return bad("queens n must be 1 through 6")
		}
	case 53:
		if len(ints(0)) == 0 {
			return bad("array must be nonempty")
		}
	case 56, 57:
		a := rows(0)
		for i, r := range a {
			if len(r) != 2 || r[0] > r[1] {
				return bad("intervals must be [start,end] with start <= end")
			}
			if id == 57 && i > 0 && a[i-1][1] >= r[0] {
				return bad("existing intervals must be sorted and nonoverlapping")
			}
		}
		if id == 57 {
			r := ints(1)
			if len(r) != 2 || r[0] > r[1] {
				return bad("newInterval must be [start,end]")
			}
		}
	case 59:
		if !rangeN(0, 1, 12) {
			return bad("matrix n must be 1 through 12")
		}
	case 60:
		if !rangeN(0, 1, 7) {
			return bad("n must be 1 through 7")
		}
		f := 1
		for i := 2; i <= num(0); i++ {
			f *= i
		}
		if !rangeN(1, 1, f) {
			return bad("k must be 1 through n factorial")
		}
	case 61:
		if !rangeN(1, 0, 1000000) {
			return bad("rotation k must be 0 through 1000000")
		}
	case 62:
		if !rangeN(0, 1, 12) || !rangeN(1, 1, 12) {
			return bad("grid dimensions must be 1 through 12")
		}
	case 66:
		a := ints(0)
		if len(a) == 0 {
			return bad("digit array must be nonempty")
		}
		for _, n := range a {
			if n < 0 || n > 9 {
				return bad("digits must be 0 through 9")
			}
		}
	case 67:
		for i := 0; i < 2; i++ {
			if len(str(i)) == 0 || !charset(str(i), "01") {
				return bad("use nonempty binary strings")
			}
		}
	case 68:
		if !rangeN(1, 1, 100) {
			return bad("width must be 1 through 100")
		}
		for _, s := range texts(0) {
			if len(s) == 0 || len(s) > num(1) {
				return bad("words must be nonempty and fit within maxWidth")
			}
		}
	case 69:
		if num(0) < 0 {
			return bad("square root requires a nonnegative integer")
		}
	case 70:
		if !rangeN(0, 1, 45) {
			return bad("stairs n must be 1 through 45")
		}
	case 71:
		if !strings.HasPrefix(str(0), "/") {
			return bad("path must be absolute")
		}
	case 75:
		for _, n := range ints(0) {
			if n < 0 || n > 2 {
				return bad("colors must be 0, 1, or 2")
			}
		}
	case 77:
		if !rangeN(0, 0, 10) || !rangeN(1, 0, num(0)) {
			return bad("use 0 <= k <= n <= 10")
		}
	case 78, 90:
		if len(ints(0)) > 10 {
			return bad("subsets support at most 10 values")
		}
		if id == 78 && !distinct(ints(0)) {
			return bad("values must be distinct")
		}
	case 87:
		if len(str(0)) != len(str(1)) || len(str(0)) > 15 || !charset(str(0)+str(1), "abcdefghijklmnopqrstuvwxyz") {
			return bad("scramble strings must be equal length, lowercase, at most 15 letters")
		}
	case 88:
		a, b := ints(0), ints(2)
		m, n := num(1), num(3)
		if m < 0 || n < 0 || m+n != len(a) || n != len(b) || m > len(a) {
			return bad("require len(nums1) = m+n and len(nums2) = n")
		}
		if !sorted(a[:m]) || !sorted(b) {
			return bad("input prefixes must be sorted")
		}
	case 89:
		if !rangeN(0, 0, 10) {
			return bad("Gray code n must be 0 through 10")
		}
	case 91:
		if len(str(0)) == 0 || len(str(0)) > 40 || !charset(str(0), "0123456789") {
			return bad("use 1 through 40 decimal digits")
		}
	case 92:
		if !rangeN(1, 1, len(ints(0))) || !rangeN(2, num(1), len(ints(0))) {
			return bad("require 1 <= left <= right <= list length")
		}
	case 93:
		if len(str(0)) > 12 || !charset(str(0), "0123456789") {
			return bad("use at most 12 decimal digits")
		}
	case 95:
		if !rangeN(0, 1, 5) {
			return bad("tree enumeration n must be 1 through 5")
		}
	case 96:
		if !rangeN(0, 0, 19) {
			return bad("tree count n must be 0 through 19")
		}
	}
	// Small values keep arithmetic and trace rendering meaningful on wasm32.
	for _, x := range v {
		if a, ok := x.([]any); ok {
			var small func([]any) bool
			small = func(xs []any) bool {
				for _, e := range xs {
					switch n := e.(type) {
					case float64:
						if math.Abs(n) > 1000000 {
							return false
						}
					case []any:
						if !small(n) {
							return false
						}
					}
				}
				return true
			}
			if !small(a) {
				return bad("array values must be within +/-1000000")
			}
		}
	}
	return nil
}
