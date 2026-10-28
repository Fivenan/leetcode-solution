import "strings"

func restoreIpAddresses(s string) []string {
	out := make([]string, 0)
	parts := make([]string, 0, 4)
	var visit func(int)
	visit = func(start int) {
		remaining := 4 - len(parts)
		if len(s)-start < remaining || len(s)-start > remaining*3 {
			return
		}
		if remaining == 0 {
			out = append(out, strings.Join(parts, "."))
			return
		}
		value := 0
		for end := start; end < len(s) && end < start+3; end++ {
			if end > start && s[start] == '0' {
				break
			}
			value = value*10 + int(s[end]-'0')
			if value > 255 {
				break
			}
			parts = append(parts, s[start:end+1])
			visit(end + 1)
			parts = parts[:len(parts)-1]
		}
	}
	visit(0)
	return out
}
