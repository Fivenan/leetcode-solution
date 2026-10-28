import "sort"

func permuteUnique(nums []int) [][]int {
	sort.Ints(nums)
	out := make([][]int, 0)
	used := make([]bool, len(nums))
	path := make([]int, 0, len(nums))
	var visit func()
	visit = func() {
		if len(path) == len(nums) {
			out = append(out, append([]int{}, path...))
			return
		}
		for i, x := range nums {
			if used[i] || i > 0 && nums[i] == nums[i-1] && !used[i-1] {
				continue
			}
			used[i] = true
			path = append(path, x)
			visit()
			path = path[:len(path)-1]
			used[i] = false
		}
	}
	visit()
	return out
}
