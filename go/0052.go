func totalNQueens(n int) int {
	full := (uint(1) << uint(n)) - 1
	var count func(uint, uint, uint) int
	count = func(cols, left, right uint) int {
		if cols == full {
			return 1
		}
		available := full & ^(cols | left | right)
		total := 0
		for available != 0 {
			bit := available & -available
			available -= bit
			total += count(cols|bit, (left|bit)<<1, (right|bit)>>1)
		}
		return total
	}
	return count(0, 0, 0)
}
