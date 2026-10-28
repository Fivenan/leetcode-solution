func isScramble(s1 string, s2 string) bool {
	if len(s1) != len(s2) {
		return false
	}
	memo := map[[3]int]bool{}
	seen := map[[3]int]bool{}
	var solve func(int, int, int) bool
	solve = func(i, j, n int) bool {
		key := [3]int{i, j, n}
		if seen[key] {
			return memo[key]
		}
		seen[key] = true
		if s1[i:i+n] == s2[j:j+n] {
			memo[key] = true
			return true
		}
		var counts [26]int
		for k := 0; k < n; k++ {
			counts[s1[i+k]-'a']++
			counts[s2[j+k]-'a']--
		}
		for _, count := range counts {
			if count != 0 {
				return false
			}
		}
		for split := 1; split < n; split++ {
			if solve(i, j, split) && solve(i+split, j+split, n-split) || solve(i, j+n-split, split) && solve(i+split, j, n-split) {
				memo[key] = true
				return true
			}
		}
		return false
	}
	return solve(0, 0, len(s1))
}
