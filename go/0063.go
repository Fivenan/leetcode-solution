func uniquePathsWithObstacles(obstacleGrid [][]int) int {
	n := len(obstacleGrid[0])
	dp := make([]int, n)
	dp[0] = 1
	for _, row := range obstacleGrid {
		for c, x := range row {
			if x == 1 {
				dp[c] = 0
			} else if c > 0 {
				dp[c] += dp[c-1]
			}
		}
	}
	return dp[n-1]
}
