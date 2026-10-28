func largestRectangleArea(heights []int) int {
	stack := []int{}
	best := 0
	for i := 0; i <= len(heights); i++ {
		h := 0
		if i < len(heights) {
			h = heights[i]
		}
		for len(stack) > 0 && heights[stack[len(stack)-1]] > h {
			idx := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			left := -1
			if len(stack) > 0 {
				left = stack[len(stack)-1]
			}
			area := heights[idx] * (i - left - 1)
			if area > best {
				best = area
			}
		}
		if i < len(heights) {
			stack = append(stack, i)
		}
	}
	return best
}
