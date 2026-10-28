func letterCombinations(digits string) []string {
	out := make([]string, 0)
	if len(digits) == 0 {
		return out
	}
	keys := []string{"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"}
	buf := make([]byte, len(digits))
	var visit func(int)
	visit = func(i int) {
		if i == len(digits) {
			out = append(out, string(buf))
			return
		}
		letters := keys[digits[i]-'0']
		for j := 0; j < len(letters); j++ {
			buf[i] = letters[j]
			visit(i + 1)
		}
	}
	visit(0)
	return out
}
