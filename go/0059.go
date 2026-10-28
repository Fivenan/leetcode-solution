func generateMatrix(n int) [][]int {
	out := make([][]int, n)
	for i := range out {
		out[i] = make([]int, n)
	}
	top, bottom, left, right, value := 0, n-1, 0, n-1, 1
	for top <= bottom && left <= right {
		for c := left; c <= right; c++ {
			out[top][c] = value
			value++
		}
		top++
		for r := top; r <= bottom; r++ {
			out[r][right] = value
			value++
		}
		right--
		if top <= bottom {
			for c := right; c >= left; c-- {
				out[bottom][c] = value
				value++
			}
			bottom--
		}
		if left <= right {
			for r := bottom; r >= top; r-- {
				out[r][left] = value
				value++
			}
			left++
		}
	}
	return out
}
