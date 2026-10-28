func canJump(nums []int) bool {
	farthest := 0
	for i, x := range nums {
		if i > farthest {
			return false
		}
		if i+x > farthest {
			farthest = i + x
		}
		if farthest >= len(nums)-1 {
			return true
		}
	}
	return false
}
