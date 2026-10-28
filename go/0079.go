func exist(board [][]byte, word string) bool {
	if len(word) == 0 {
		return true
	}
	m, n := len(board), len(board[0])
	if len(word) > m*n {
		return false
	}
	var visit func(int, int, int) bool
	visit = func(r, c, pos int) bool {
		if r < 0 || r >= m || c < 0 || c >= n || board[r][c] != word[pos] {
			return false
		}
		if pos == len(word)-1 {
			return true
		}
		saved := board[r][c]
		board[r][c] = 0
		found := visit(r+1, c, pos+1) || visit(r-1, c, pos+1) || visit(r, c+1, pos+1) || visit(r, c-1, pos+1)
		board[r][c] = saved
		return found
	}
	for r := 0; r < m; r++ {
		for c := 0; c < n; c++ {
			if visit(r, c, 0) {
				return true
			}
		}
	}
	return false
}
