func searchRange(nums []int, target int) []int {
	bound := func(strict bool) int {
		lo, hi := 0, len(nums)
		for lo < hi {
			mid := lo + (hi-lo)/2
			if nums[mid] < target || strict && nums[mid] == target {
				lo = mid + 1
			} else {
				hi = mid
			}
		}
		return lo
	}
	first := bound(false)
	if first == len(nums) || nums[first] != target {
		return []int{-1, -1}
	}
	return []int{first, bound(true) - 1}
}
