func divide(dividend int, divisor int) int {
	if dividend == -2147483648 && divisor == -1 {
		return 2147483647
	}
	a, b := int64(dividend), int64(divisor)
	negative := (a < 0) != (b < 0)
	if a < 0 {
		a = -a
	}
	if b < 0 {
		b = -b
	}
	q := int64(0)
	for bit := 31; bit >= 0; bit-- {
		if a>>bit >= b {
			a -= b << bit
			q |= int64(1) << bit
		}
	}
	if negative {
		q = -q
	}
	return int(q)
}
