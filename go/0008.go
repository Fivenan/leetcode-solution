func myAtoi(s string) int {
	i := 0
	for i < len(s) && s[i] == ' ' {
		i++
	}
	sign := 1
	if i < len(s) && (s[i] == '+' || s[i] == '-') {
		if s[i] == '-' {
			sign = -1
		}
		i++
	}
	limit := 2147483647
	if sign < 0 {
		limit++
	}
	value := 0
	for i < len(s) && s[i] >= '0' && s[i] <= '9' {
		d := int(s[i] - '0')
		if value > (limit-d)/10 {
			return sign * limit
		}
		value = value*10 + d
		i++
	}
	return sign * value
}
