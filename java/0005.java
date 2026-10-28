import java.util.*;

class Solution {
    public String longestPalindrome(String s) {
        int n = s.length(), m = 2 * n + 1;
        int[] p = new int[m];
        int c = 0, r = 0, best = 0, bc = 0;
        for (int i = 0; i < m; i++) {
            if (i < r) {
                p[i] = Math.min(r - i, p[2 * c - i]);
            }
            while (i - p[i] - 1 >= 0 && i + p[i] + 1 < m && same(s, i - p[i] - 1, i + p[i] + 1)) {
                p[i]++;
            }
            if (i + p[i] > r) {
                c = i;
                r = i + p[i];
            }
            if (p[i] > best) {
                best = p[i];
                bc = i;
            }
        }
        return s.substring((bc - best) / 2,(bc + best) / 2);
    }

    private boolean same(String s, int a, int b) {
        return (a & 1) == 0 ? (b & 1) == 0 : (b & 1) == 1 && s.charAt(a / 2) == s.charAt(b / 2);
    }
}
