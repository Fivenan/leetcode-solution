func removeElement(nums []int, val int) int {
	write := 0
	for _, x := range nums {
		if x != val {
			nums[write] = x
			write++
		}
	}
	return write
}
