import java.util.*;

class Solution {
    public void rotate(int[][] a) {
        int n = a.length;
        for (int r = 0; r < n; r++) {
            for (int c = r + 1; c < n; c++) {
                int t = a[r][c];
                a[r][c] = a[c][r];
                a[c][r] = t;
            }
        }
        for (int[] row : a) {
            for (int l = 0, r = n - 1; l < r; l++, r--) {
                int t = row[l];
                row[l] = row[r];
                row[r] = t;
            }
        }
    }
}
