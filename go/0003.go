func lengthOfLongestSubstring(s string) int {
	last := make(map[byte]int)
	left, best := 0, 0
	for right := 0; right < len(s); right++ {
		if p, ok := last[s[right]]; ok && p >= left {
			left = p + 1
		}
		last[s[right]] = right
		if right-left+1 > best {
			best = right - left + 1
		}
	}
	return best
}
