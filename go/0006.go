import "strings"

func convert(s string, numRows int) string {
	if numRows <= 1 || numRows >= len(s) {
		return s
	}
	rows := make([]strings.Builder, numRows)
	row, step := 0, 1
	for i := 0; i < len(s); i++ {
		rows[row].WriteByte(s[i])
		if row == 0 {
			step = 1
		} else if row == numRows-1 {
			step = -1
		}
		row += step
	}
	var out strings.Builder
	out.Grow(len(s))
	for i := range rows {
		out.WriteString(rows[i].String())
	}
	return out.String()
}
