func permute(nums []int) [][]int {
	out := make([][]int, 0)
	var visit func(int)
	visit = func(pos int) {
		if pos == len(nums) {
			out = append(out, append([]int{}, nums...))
			return
		}
		for i := pos; i < len(nums); i++ {
			nums[pos], nums[i] = nums[i], nums[pos]
			visit(pos + 1)
			nums[pos], nums[i] = nums[i], nums[pos]
		}
	}
	visit(0)
	return out
}
