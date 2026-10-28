func findSubstring(s string, words []string) []int {
	out := make([]int, 0)
	if len(words) == 0 || len(words[0]) == 0 {
		return out
	}
	w := len(words[0])
	need := map[string]int{}
	for _, word := range words {
		need[word]++
	}
	for offset := 0; offset < w; offset++ {
		left, count := offset, 0
		have := map[string]int{}
		for right := offset; right+w <= len(s); right += w {
			word := s[right : right+w]
			if need[word] == 0 {
				clear(have)
				count = 0
				left = right + w
				continue
			}
			have[word]++
			count++
			for have[word] > need[word] {
				old := s[left : left+w]
				have[old]--
				count--
				left += w
			}
			if count == len(words) {
				out = append(out, left)
				old := s[left : left+w]
				have[old]--
				count--
				left += w
			}
		}
	}
	return out
}
