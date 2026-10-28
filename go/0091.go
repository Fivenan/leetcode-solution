func numDecodings(s string) int {
	if len(s) == 0 {
		return 0
	}
	older, previous := 1, 0
	if s[0] != '0' {
		previous = 1
	}
	for i := 1; i < len(s); i++ {
		current := 0
		if s[i] != '0' {
			current += previous
		}
		pair := int(s[i-1]-'0')*10 + int(s[i]-'0')
		if pair >= 10 && pair <= 26 {
			current += older
		}
		older, previous = previous, current
	}
	return previous
}
