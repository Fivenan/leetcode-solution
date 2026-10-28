import java.util.*;

class Solution {
    public int maximalRectangle(char[][] a) {
        int n = a[0].length, best = 0;
        int[] h = new int[n], st = new int[n + 1];
        for (char[] row : a) {
            for (int c = 0; c < n; c++) {
                h[c] = row[c] == '1' ? h[c] + 1 : 0;
            }
            int top = - 1;
            for (int i = 0; i <= n; i++) {
                int cur = i == n ? 0 : h[i];
                while (top >= 0 && h[st[top]] > cur) {
                    int height = h[st[top--]], left = top < 0 ? - 1 : st[top];
                    best = Math.max(best, height * (i - left - 1));
                }
                st[++top] = i;
            }
        }
        return best;
    }
}
