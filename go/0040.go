import "sort"

func combinationSum2(candidates []int, target int) [][]int {
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
			if i > start && candidates[i] == candidates[i-1] {
				continue
			}
			path = append(path, candidates[i])
			visit(i+1, remain-candidates[i])
			path = path[:len(path)-1]
		}
	}
	visit(0, target)
	return out
}
