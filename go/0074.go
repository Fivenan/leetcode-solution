func searchMatrix(matrix [][]int, target int) bool {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return false
	}
	n := len(matrix[0])
	lo, hi := 0, len(matrix)*n
	for lo < hi {
		mid := lo + (hi-lo)/2
		x := matrix[mid/n][mid%n]
		if x < target {
			lo = mid + 1
		} else {
			hi = mid
		}
	}
	return lo < len(matrix)*n && matrix[lo/n][lo%n] == target
}
