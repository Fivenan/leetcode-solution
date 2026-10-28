func reverse(x int) int {
	result := 0
	for x != 0 {
		d := x % 10
		x /= 10
		if result > 214748364 || result == 214748364 && d > 7 || result < -214748364 || result == -214748364 && d < -8 {
			return 0
		}
		result = result*10 + d
	}
	return result
}
