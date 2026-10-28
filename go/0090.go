import "sort"

func subsetsWithDup(nums []int) [][]int {
	sort.Ints(nums)
	out := make([][]int, 0)
	path := []int{}
	var visit func(int)
	visit = func(start int) {
		out = append(out, append([]int{}, path...))
		for i := start; i < len(nums); i++ {
			if i > start && nums[i] == nums[i-1] {
				continue
			}
			path = append(path, nums[i])
			visit(i + 1)
			path = path[:len(path)-1]
		}
	}
	visit(0)
	return out
}
