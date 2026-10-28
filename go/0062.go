func uniquePaths(m int, n int) int {
	if n > m {
		m, n = n, m
	}
	// Choose the n-1 down steps among the m+n-2 total steps.
	paths := int64(1)
	for i := 1; i < n; i++ {
		paths = paths * int64(m-1+i) / int64(i)
	}
	return int(paths)
}
