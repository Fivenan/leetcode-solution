import (
	"strconv"
	"strings"
)

func countAndSay(n int) string {
	s := "1"
	for step := 1; step < n; step++ {
		var out strings.Builder
		for i := 0; i < len(s); {
			j := i + 1
			for j < len(s) && s[j] == s[i] {
				j++
			}
			out.WriteString(strconv.Itoa(j - i))
			out.WriteByte(s[i])
			i = j
		}
		s = out.String()
	}
	return s
}
