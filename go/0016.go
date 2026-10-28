import "sort"

func threeSumClosest(nums []int, target int) int {
	sort.Ints(nums)
	best := nums[0] + nums[1] + nums[2]
	abs := func(x int) int {
		if x < 0 {
			return -x
		}
		return x
	}
	for i := 0; i+2 < len(nums); i++ {
		l, r := i+1, len(nums)-1
		for l < r {
			sum := nums[i] + nums[l] + nums[r]
			if abs(sum-target) < abs(best-target) {
				best = sum
			}
			if sum == target {
				return sum
			}
			if sum < target {
				l++
			} else {
				r--
			}
		}
	}
	return best
}
