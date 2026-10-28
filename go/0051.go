import "strings"

func solveNQueens(n int) [][]string {
	out := make([][]string, 0)
	cols := make([]bool, n)
	down, up := make([]bool, 2*n-1), make([]bool, 2*n-1)
	positions := make([]int, n)
	var visit func(int)
	visit = func(r int) {
		if r == n {
			board := make([]string, n)
			for row, c := range positions {
				board[row] = strings.Repeat(".", c) + "Q" + strings.Repeat(".", n-c-1)
			}
			out = append(out, board)
			return
		}
		for c := 0; c < n; c++ {
			d, u := r-c+n-1, r+c
			if cols[c] || down[d] || up[u] {
				continue
			}
			cols[c], down[d], up[u] = true, true, true
			positions[r] = c
			visit(r + 1)
			cols[c], down[d], up[u] = false, false, false
		}
	}
	visit(0)
	return out
}
