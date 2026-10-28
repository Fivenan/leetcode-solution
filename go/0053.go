func maxSubArray(nums []int) int {
	current, best := nums[0], nums[0]
	for _, x := range nums[1:] {
		if current < 0 {
			current = x
		} else {
			current += x
		}
		if current > best {
			best = current
		}
	}
	return best
}
