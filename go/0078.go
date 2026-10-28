func subsets(nums []int) [][]int {
	out := [][]int{{}}
	for _, x := range nums {
		size := len(out)
		for i := 0; i < size; i++ {
			next := make([]int, len(out[i])+1)
			copy(next, out[i])
			next[len(next)-1] = x
			out = append(out, next)
		}
	}
	return out
}
