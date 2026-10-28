func myPow(x float64, n int) float64 {
	exp := int64(n)
	if exp < 0 {
		x = 1 / x
		exp = -exp
	}
	result := 1.0
	for exp > 0 {
		if exp&1 != 0 {
			result *= x
		}
		x *= x
		exp >>= 1
	}
	return result
}
