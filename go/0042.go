func trap(height []int) int {
	l, r := 0, len(height)-1
	leftMax, rightMax, total := 0, 0, 0
	for l <= r {
		if leftMax <= rightMax {
			if height[l] > leftMax {
				leftMax = height[l]
			} else {
				total += leftMax - height[l]
			}
			l++
		} else {
			if height[r] > rightMax {
				rightMax = height[r]
			} else {
				total += rightMax - height[r]
			}
			r--
		}
	}
	return total
}
