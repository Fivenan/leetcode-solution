func numTrees(n int) int {
	// The number of BST shapes is the nth Catalan number.
	count := int64(1)
	for k := 0; k < n; k++ {
		count = count * 2 * int64(2*k+1) / int64(k+2)
	}
	return int(count)
}
