import java.util.*;

class Solution {
    public void setZeroes(int[][] a) {
        int m = a.length, n = a[0].length;
        boolean firstRow = false, firstCol = false;
        for (int c = 0; c < n; c++) {
            if (a[0][c] == 0) {
                firstRow = true;
            }
        }
        for (int r = 0; r < m; r++) {
            if (a[r][0] == 0) {
                firstCol = true;
            }
        }
        for (int r = 1; r < m; r++) {
            for (int c = 1; c < n; c++) {
                if (a[r][c] == 0) {
                    a[r][0] = 0;
                    a[0][c] = 0;
                }
            }
        }
        for (int r = 1; r < m; r++) {
            for (int c = 1; c < n; c++) {
                if (a[r][0] == 0 || a[0][c] == 0) {
                    a[r][c] = 0;
                }
            }
        }
        if (firstRow) {
            Arrays.fill(a[0], 0);
        }
        if (firstCol) {
            for (int r = 0; r < m; r++) {
                a[r][0] = 0;
            }
        }
    }
}
