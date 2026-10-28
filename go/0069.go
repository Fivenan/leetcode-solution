func mySqrt(x int) int {
	if x < 2 {
		return x
	}
	lo, hi := 1, x/2+1
	for lo <= hi {
		mid := lo + (hi-lo)/2
		if mid <= x/mid {
			lo = mid + 1
		} else {
			hi = mid - 1
		}
	}
	return hi
}
