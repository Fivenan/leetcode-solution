import java.util.*;

class Solution {
    public int uniquePaths(int m, int n) {
        int steps = m + n - 2;
        int choices = Math.min(m - 1, n - 1);
        long paths = 1;
        for (int i = 1; i <= choices; i++) {
            paths = paths * (steps - choices + i) / i;
        }
        return (int) paths;
    }
}
