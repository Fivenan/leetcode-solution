import java.util.*;

class Solution {
    public boolean isMatch(String s, String p) {
        int n = p.length();
        boolean[] d = new boolean[n + 1];
        d[0] = true;
        for (int j = 2; j <= n; j++) {
            if (p.charAt(j - 1) == '*') {
                d[j] = d[j - 2];
            }
        }
        for (int i = 1; i <= s.length(); i++) {
            boolean diagonal = d[0];
            d[0] = false;
            for (int j = 1; j <= n; j++) {
                boolean above = d[j];
                char c = p.charAt(j - 1);
                if (c == '*') {
                    d[j] = d[j - 2] || ((p.charAt(j - 2) == '.' || p.charAt(j - 2) == s.charAt(i - 1)) && above);
                } else {
                    d[j] = (c == '.' || c == s.charAt(i - 1)) && diagonal;
                }
                diagonal = above;
            }
        }
        return d[n];
    }
}
