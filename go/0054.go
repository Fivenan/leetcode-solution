func spiralOrder(matrix [][]int) []int {
	out := make([]int, 0)
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return out
	}
	top, bottom, left, right := 0, len(matrix)-1, 0, len(matrix[0])-1
	for top <= bottom && left <= right {
		for c := left; c <= right; c++ {
			out = append(out, matrix[top][c])
		}
		top++
		for r := top; r <= bottom; r++ {
			out = append(out, matrix[r][right])
		}
		right--
		if top <= bottom {
			for c := right; c >= left; c-- {
				out = append(out, matrix[bottom][c])
			}
			bottom--
		}
		if left <= right {
			for r := bottom; r >= top; r-- {
				out = append(out, matrix[r][left])
			}
			left++
		}
	}
	return out
}
