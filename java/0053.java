import java.util.*;

class Solution {
    public int maxSubArray(int[] a) {
        int end = a[0], best = end;
        for (int i = 1; i < a.length; i++) {
            end = Math.max(a[i], end + a[i]);
            best = Math.max(best, end);
        }
        return best;
    }
}
