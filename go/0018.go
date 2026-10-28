import "sort"

func fourSum(nums []int, target int) [][]int {
	sort.Ints(nums)
	out := make([][]int, 0)
	n := len(nums)
	for i := 0; i+3 < n; i++ {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		for j := i + 1; j+2 < n; j++ {
			if j > i+1 && nums[j] == nums[j-1] {
				continue
			}
			l, r := j+1, n-1
			for l < r {
				sum := int64(nums[i]) + int64(nums[j]) + int64(nums[l]) + int64(nums[r])
				if sum < int64(target) {
					l++
				} else if sum > int64(target) {
					r--
				} else {
					out = append(out, []int{nums[i], nums[j], nums[l], nums[r]})
					l++
					r--
					for l < r && nums[l] == nums[l-1] {
						l++
					}
					for l < r && nums[r] == nums[r+1] {
						r--
					}
				}
			}
		}
	}
	return out
}
