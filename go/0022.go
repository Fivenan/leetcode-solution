func generateParenthesis(n int) []string {
	out := make([]string, 0)
	buf := make([]byte, 2*n)
	var visit func(int, int)
	visit = func(open, close int) {
		if close == n {
			out = append(out, string(buf))
			return
		}
		if open < n {
			buf[open+close] = '('
			visit(open+1, close)
		}
		if close < open {
			buf[open+close] = ')'
			visit(open, close+1)
		}
	}
	visit(0, 0)
	return out
}
