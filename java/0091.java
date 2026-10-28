import java.util.*;

class Solution {
    public int numDecodings(String s) {
        long prev2 = 1, prev1 = s.charAt(0) == '0' ? 0 : 1;
        for (int i = 1; i < s.length(); i++) {
            long cur = 0;
            if (s.charAt(i) != '0') {
                cur += prev1;
            }
            int pair = (s.charAt(i - 1) - '0') * 10 + s.charAt(i) - '0';
            if (pair >= 10 && pair <= 26) {
                cur += prev2;
            }
            prev2 = prev1;
            prev1 = Math.min(Integer.MAX_VALUE, cur);
        }
        return (int) prev1;
    }
}
