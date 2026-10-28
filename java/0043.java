import java.util.*;

class Solution {
    public String multiply(String a, String b) {
        int m = a.length(), n = b.length();
        int[] d = new int[m + n];
        for (int i = m - 1; i >= 0; i--) {
            for (int j = n - 1; j >= 0; j--) {
                int s = (a.charAt(i) - '0') * (b.charAt(j) - '0') + d[i + j + 1];
                d[i + j + 1] = s % 10;
                d[i + j] += s / 10;
            }
        }
        StringBuilder out = new StringBuilder();
        for (int v : d) {
            if (out.length() > 0 || v != 0) {
                out.append(v);
            }
        }
        return out.length() == 0 ? "0" : out.toString();
    }
}
