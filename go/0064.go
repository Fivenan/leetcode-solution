func minPathSum(grid [][]int) int {
	dp := make([]int, len(grid[0]))
	for r, row := range grid {
		for c, x := range row {
			if r == 0 && c == 0 {
				dp[c] = x
			} else if r == 0 {
				dp[c] = dp[c-1] + x
			} else if c == 0 {
				dp[c] += x
			} else {
				if dp[c-1] < dp[c] {
					dp[c] = dp[c-1]
				}
				dp[c] += x
			}
		}
	}
	return dp[len(dp)-1]
}
