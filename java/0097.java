import java.util.*;

class Solution {
    public boolean isInterleave(String a, String b, String s) {
        if (a.length() + b.length() != s.length()) {
            return false;
        }
        if (b.length() > a.length()) {
            String t = a;
            a = b;
            b = t;
        }
        boolean[] d = new boolean[b.length() + 1];
        d[0] = true;
        for (int j = 1; j <= b.length(); j++) {
            d[j] = d[j - 1] && b.charAt(j - 1) == s.charAt(j - 1);
        }
        for (int i = 1; i <= a.length(); i++) {
            d[0] = d[0] && a.charAt(i - 1) == s.charAt(i - 1);
            for (int j = 1; j <= b.length(); j++) {
                char c = s.charAt(i + j - 1);
                d[j] = d[j] && a.charAt(i - 1) == c || d[j - 1] && b.charAt(j - 1) == c;
            }
        }
        return d[b.length()];
    }
}
