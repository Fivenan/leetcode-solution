import "strings"

func fullJustify(words []string, maxWidth int) []string {
	out := make([]string, 0)
	for i := 0; i < len(words); {
		j, letters := i, 0
		for j < len(words) && letters+len(words[j])+(j-i) <= maxWidth {
			letters += len(words[j])
			j++
		}
		gaps := j - i - 1
		var line strings.Builder
		if j == len(words) || gaps == 0 {
			line.WriteString(strings.Join(words[i:j], " "))
			line.WriteString(strings.Repeat(" ", maxWidth-line.Len()))
		} else {
			spaces := maxWidth - letters
			base, extra := spaces/gaps, spaces%gaps
			for k := i; k < j; k++ {
				line.WriteString(words[k])
				if k < j-1 {
					count := base
					if k-i < extra {
						count++
					}
					line.WriteString(strings.Repeat(" ", count))
				}
			}
		}
		out = append(out, line.String())
		i = j
	}
	return out
}
