func grayCode(n int) []int {
	out := make([]int, 1<<uint(n))
	for i := range out {
		out[i] = i ^ (i >> 1)
	}
	return out
}
