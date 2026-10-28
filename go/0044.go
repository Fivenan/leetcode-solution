func isMatch(s string, p string) bool {
	prev := make([]bool, len(p)+1)
	prev[0] = true
	for j := 1; j <= len(p); j++ {
		prev[j] = p[j-1] == '*' && prev[j-1]
	}
	for i := 1; i <= len(s); i++ {
		cur := make([]bool, len(p)+1)
		for j := 1; j <= len(p); j++ {
			if p[j-1] == '*' {
				cur[j] = cur[j-1] || prev[j]
			} else {
				cur[j] = (p[j-1] == '?' || p[j-1] == s[i-1]) && prev[j-1]
			}
		}
		prev = cur
	}
	return prev[len(p)]
}
