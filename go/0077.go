func combine(n int, k int) [][]int {
	out := make([][]int, 0)
	path := make([]int, 0, k)
	var visit func(int)
	visit = func(start int) {
		if len(path) == k {
			out = append(out, append([]int{}, path...))
			return
		}
		last := n - (k - len(path)) + 1
		for x := start; x <= last; x++ {
			path = append(path, x)
			visit(x + 1)
			path = path[:len(path)-1]
		}
	}
	visit(1)
	return out
}
