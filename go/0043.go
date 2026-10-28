func multiply(num1 string, num2 string) string {
	if num1 == "0" || num2 == "0" {
		return "0"
	}
	digits := make([]int, len(num1)+len(num2))
	for i := len(num1) - 1; i >= 0; i-- {
		for j := len(num2) - 1; j >= 0; j-- {
			sum := int(num1[i]-'0')*int(num2[j]-'0') + digits[i+j+1]
			digits[i+j+1] = sum % 10
			digits[i+j] += sum / 10
		}
	}
	start := 0
	for start < len(digits)-1 && digits[start] == 0 {
		start++
	}
	out := make([]byte, len(digits)-start)
	for i := range out {
		out[i] = byte(digits[start+i]) + '0'
	}
	return string(out)
}
