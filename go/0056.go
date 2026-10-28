import "sort"

func merge(intervals [][]int) [][]int {
	if len(intervals) == 0 {
		return [][]int{}
	}
	sort.Slice(intervals, func(i, j int) bool { return intervals[i][0] < intervals[j][0] })
	out := make([][]int, 0, len(intervals))
	for _, iv := range intervals {
		if len(out) == 0 || iv[0] > out[len(out)-1][1] {
			out = append(out, []int{iv[0], iv[1]})
		} else if iv[1] > out[len(out)-1][1] {
			out[len(out)-1][1] = iv[1]
		}
	}
	return out
}
