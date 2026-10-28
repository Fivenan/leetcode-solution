func isNumber(s string) bool {
	digit, dot, exponent := false, false, false
	for i := 0; i < len(s); i++ {
		c := s[i]
		switch {
		case c >= '0' && c <= '9':
			digit = true
		case c == '+' || c == '-':
			if i != 0 && s[i-1] != 'e' && s[i-1] != 'E' {
				return false
			}
		case c == '.':
			if dot || exponent {
				return false
			}
			dot = true
		case c == 'e' || c == 'E':
			if exponent || !digit {
				return false
			}
			exponent = true
			digit = false
		default:
			return false
		}
	}
	return digit
}
