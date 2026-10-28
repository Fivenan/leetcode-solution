import java.util.*;

class Solution {
    public int maxArea(int[] h) {
        int l = 0, r = h.length - 1, best = 0;
        while (l < r) {
            best = Math.max(best,(r - l) * Math.min(h[l], h[r]));
            if (h[l] <= h[r]) {
                l++;
            } else {
                r--;
            }
        }
        return best;
    }
}
