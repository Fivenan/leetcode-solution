func removeDuplicates(nums []int) int {
	write := 0
	for _, x := range nums {
		if write == 0 || x != nums[write-1] {
			nums[write] = x
			write++
		}
	}
	return write
}
