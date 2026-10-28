import java.util.*;

class Solution {
    public boolean searchMatrix(int[][] a, int target) {
        int n = a[0].length, l = 0, r = a.length * n - 1;
        while (l <= r) {
            int m = l + (r - l) / 2, v = a[m / n][m % n];
            if (v == target) {
                return true;
            }
            if (v < target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return false;
    }
}
