import java.util.*;

class Solution {
    public int minDistance(String a, String b) {
        if (a.length() < b.length()) {
            String t = a;
            a = b;
            b = t;
        }
        int[] d = new int[b.length() + 1];
        for (int j = 0; j < d.length; j++) {
            d[j] = j;
        }
        for (int i = 1; i <= a.length(); i++) {
            int diag = d[0];
            d[0] = i;
            for (int j = 1; j <= b.length(); j++) {
                int old = d[j];
                d[j] = a.charAt(i - 1) == b.charAt(j - 1) ? diag : 1 + Math.min(diag, Math.min(old, d[j - 1]));
                diag = old;
            }
        }
        return d[b.length()];
    }
}
