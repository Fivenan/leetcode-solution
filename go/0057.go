func insert(intervals [][]int, newInterval []int) [][]int {
	out := make([][]int, 0, len(intervals)+1)
	i := 0
	for i < len(intervals) && intervals[i][1] < newInterval[0] {
		out = append(out, intervals[i])
		i++
	}
	start, end := newInterval[0], newInterval[1]
	for i < len(intervals) && intervals[i][0] <= end {
		if intervals[i][0] < start {
			start = intervals[i][0]
		}
		if intervals[i][1] > end {
			end = intervals[i][1]
		}
		i++
	}
	out = append(out, []int{start, end})
	out = append(out, intervals[i:]...)
	return out
}
