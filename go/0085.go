func maximalRectangle(matrix [][]byte) int {
	if len(matrix) == 0 {
		return 0
	}
	heights := make([]int, len(matrix[0]))
	best := 0
	for _, row := range matrix {
		for c, x := range row {
			if x == '1' {
				heights[c]++
			} else {
				heights[c] = 0
			}
		}
		stack := []int{}
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
	}
	return best
}
