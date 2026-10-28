import java.util.*;

class Solution {
    public int myAtoi(String s) {
        int i = 0, n = s.length(), sign = 1;
        while (i < n && s.charAt(i) == ' ') {
            i++;
        }
        if (i < n && (s.charAt(i) == '+' || s.charAt(i) == '-')) {
            sign = s.charAt(i++) == '-' ? - 1 : 1;
        }
        long v = 0, limit = sign == 1 ? Integer.MAX_VALUE : 2147483648L;
        while (i < n && s.charAt(i) >= '0' && s.charAt(i) <= '9') {
            int d = s.charAt(i++) - '0';
            if (v >(limit - d) / 10) {
                return sign == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }
            v = v * 10 + d;
        }
        return (int)(sign * v);
    }
}
