import java.util.*;

class Solution {
    public int uniquePathsWithObstacles(int[][] a) {
        int n = a[0].length;
        int[] d = new int[n];
        d[0] = 1;
        for (int[] row : a) {
            for (int c = 0; c < n; c++) {
                if (row[c] == 1) {
                    d[c] = 0;
                } else if (c > 0) {
                    d[c] = (int) Math.min(Integer.MAX_VALUE,(long) d[c] + d[c - 1]);
                }
            }
        }
        return d[n - 1];
    }
}
