import "math/bits"

func climbStairs(n int) int {
	// The answer is Fibonacci(n+1); retain F(k) and F(k+1).
	index := uint(n + 1)
	a, b := int64(0), int64(1)
	for bit := bits.Len(index) - 1; bit >= 0; bit-- {
		doubled := a * (2*b - a)
		next := a*a + b*b
		if index>>uint(bit)&1 == 0 {
			a, b = doubled, next
		} else {
			a, b = next, doubled+next
		}
	}
	return int(a)
}
