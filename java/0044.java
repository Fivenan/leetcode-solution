import java.util.*;

class Solution {
    public boolean isMatch(String s, String p) {
        boolean[] d = new boolean[p.length() + 1];
        d[0] = true;
        for (int j = 1; j <= p.length(); j++) {
            d[j] = d[j - 1] && p.charAt(j - 1) == '*';
        }
        for (int i = 1; i <= s.length(); i++) {
            boolean prev = d[0];
            d[0] = false;
            for (int j = 1; j <= p.length(); j++) {
                boolean old = d[j];
                char c = p.charAt(j - 1);
                d[j] = c == '*' ? (d[j - 1] || old) : prev && (c == '?' || c == s.charAt(i - 1));
                prev = old;
            }
        }
        return d[p.length()];
    }
}
