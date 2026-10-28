import "strings"

func getPermutation(n int, k int) string {
	factorial := make([]int, n+1)
	factorial[0] = 1
	digits := make([]byte, n)
	for i := 1; i <= n; i++ {
		factorial[i] = factorial[i-1] * i
		digits[i-1] = byte('0' + i)
	}
	k--
	var out strings.Builder
	for remain := n; remain > 0; remain-- {
		block := factorial[remain-1]
		idx := k / block
		k %= block
		out.WriteByte(digits[idx])
		digits = append(digits[:idx], digits[idx+1:]...)
	}
	return out.String()
}
