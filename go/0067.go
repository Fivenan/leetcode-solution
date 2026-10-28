func addBinary(a string, b string) string {
	out := make([]byte, 0, len(a)+len(b)+1)
	i, j, carry := len(a)-1, len(b)-1, 0
	for i >= 0 || j >= 0 || carry > 0 {
		sum := carry
		if i >= 0 {
			sum += int(a[i] - '0')
			i--
		}
		if j >= 0 {
			sum += int(b[j] - '0')
			j--
		}
		out = append(out, byte(sum%2)+'0')
		carry = sum / 2
	}
	for l, r := 0, len(out)-1; l < r; l, r = l+1, r-1 {
		out[l], out[r] = out[r], out[l]
	}
	return string(out)
}
