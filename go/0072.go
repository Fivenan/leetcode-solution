func minDistance(word1 string, word2 string) int {
	if len(word2) > len(word1) {
		word1, word2 = word2, word1
	}
	dp := make([]int, len(word2)+1)
	for j := range dp {
		dp[j] = j
	}
	for i := 1; i <= len(word1); i++ {
		diagonal := dp[0]
		dp[0] = i
		for j := 1; j <= len(word2); j++ {
			above := dp[j]
			if word1[i-1] == word2[j-1] {
				dp[j] = diagonal
			} else {
				best := above
				if dp[j-1] < best {
					best = dp[j-1]
				}
				if diagonal < best {
					best = diagonal
				}
				dp[j] = best + 1
			}
			diagonal = above
		}
	}
	return dp[len(word2)]
}
