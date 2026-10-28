import java.util.*;

class Solution {
    public int[][] generateMatrix(int n) {
        int[][] a = new int[n][n];
        int top = 0, bottom = n - 1, left = 0, right = n - 1, v = 1;
        while (top <= bottom) {
            for (int c = left; c <= right; c++) {
                a[top][c] = v++;
            }
            top++;
            for (int r = top; r <= bottom; r++) {
                a[r][right] = v++;
            }
            right--;
            if (top <= bottom) {
                for (int c = right; c >= left; c--) {
                    a[bottom][c] = v++;
                }
                bottom--;
            }
            if (left <= right) {
                for (int r = bottom; r >= top; r--) {
                    a[r][left] = v++;
                }
                left++;
            }
        }
        return a;
    }
}
