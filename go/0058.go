func lengthOfLastWord(s string) int {
	i := len(s) - 1
	for i >= 0 && s[i] == ' ' {
		i--
	}
	end := i
	for i >= 0 && s[i] != ' ' {
		i--
	}
	return end - i
}
