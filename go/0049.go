func groupAnagrams(strs []string) [][]string {
	out := make([][]string, 0)
	groups := map[[26]int]int{}
	for _, s := range strs {
		var key [26]int
		for i := 0; i < len(s); i++ {
			key[s[i]-'a']++
		}
		idx, ok := groups[key]
		if !ok {
			idx = len(out)
			groups[key] = idx
			out = append(out, []string{})
		}
		out[idx] = append(out[idx], s)
	}
	return out
}
