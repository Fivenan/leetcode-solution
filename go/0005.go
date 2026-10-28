func longestPalindrome(s string) string {
	if len(s) == 0 {
		return ""
	}
	// Interleave virtual separators: even positions separate original bytes.
	size := 2*len(s) + 1
	radius := make([]int, size)
	center, right := 0, 0
	bestCenter, bestRadius := 0, 0
	equal := func(a, b int) bool {
		if a%2 == 0 {
			return b%2 == 0
		}
		return b%2 == 1 && s[a/2] == s[b/2]
	}
	for i := 0; i < size; i++ {
		if i < right {
			mirror := 2*center - i
			radius[i] = radius[mirror]
			if radius[i] > right-i {
				radius[i] = right - i
			}
		}
		for i-radius[i]-1 >= 0 && i+radius[i]+1 < size && equal(i-radius[i]-1, i+radius[i]+1) {
			radius[i]++
		}
		if i+radius[i] > right {
			center, right = i, i+radius[i]
		}
		if radius[i] > bestRadius {
			bestCenter, bestRadius = i, radius[i]
		}
	}
	start := (bestCenter - bestRadius) / 2
	return s[start : start+bestRadius]
}
