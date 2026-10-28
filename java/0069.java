import java.util.*;

class Solution {
    public int mySqrt(int x) {
        int l = 0, r = Math.min(x, 46340), ans = 0;
        while (l <= r) {
            int m = l + (r - l) / 2;
            if ((long) m * m <= x) {
                ans = m;
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return ans;
    }
}
