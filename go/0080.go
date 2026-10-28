func removeDuplicates(nums []int) int {
	write := 0
	for _, x := range nums {
		if write < 2 || x != nums[write-2] {
			nums[write] = x
			write++
		}
	}
	return write
}
