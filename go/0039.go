import "sort"

func combinationSum(candidates []int, target int) [][]int {
	sort.Ints(candidates)
	out := make([][]int, 0)
	path := []int{}
	var visit func(int, int)
	visit = func(start, remain int) {
		if remain == 0 {
			out = append(out, append([]int{}, path...))
			return
		}
		for i := start; i < len(candidates) && candidates[i] <= remain; i++ {
			path = append(path, candidates[i])
			visit(i, remain-candidates[i])
			path = path[:len(path)-1]
		}
	}
	visit(0, target)
	return out
}
