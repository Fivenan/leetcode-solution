import java.util.*;

class Solution {
    public int strStr(String h, String p) {
        if (p.isEmpty()) {
            return 0;
        }
        int[] pi = new int[p.length()];
        for (int i = 1, j = 0; i < p.length(); i++) {
            while (j > 0 && p.charAt(i) != p.charAt(j)) {
                j = pi[j - 1];
            }
            if (p.charAt(i) == p.charAt(j)) {
                j++;
            }
            pi[i] = j;
        }
        for (int i = 0, j = 0; i < h.length(); i++) {
            while (j > 0 && h.charAt(i) != p.charAt(j)) {
                j = pi[j - 1];
            }
            if (h.charAt(i) == p.charAt(j)) {
                j++;
            }
            if (j == p.length()) {
                return i - j + 1;
            }
        }
        return - 1;
    }
}
