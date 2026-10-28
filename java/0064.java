import java.util.*;

class Solution {
    public int minPathSum(int[][] a) {
        int n = a[0].length;
        int[] d = new int[n];
        for (int r = 0; r < a.length; r++) {
            for (int c = 0; c < n; c++) {
                if (r == 0 && c == 0) {
                    d[c] = a[r][c];
                } else if (r == 0) {
                    d[c] = d[c - 1] + a[r][c];
                } else if (c == 0) {
                    d[c] += a[r][c];
                } else {
                    d[c] = Math.min(d[c], d[c - 1]) + a[r][c];
                }
            }
        }
        return d[n - 1];
    }
}
