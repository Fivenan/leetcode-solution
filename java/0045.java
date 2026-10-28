import java.util.*;

class Solution {
    public int jump(int[] a) {
        int jumps = 0, end = 0, far = 0;
        for (int i = 0; i < a.length - 1; i++) {
            far = Math.max(far, i + a[i]);
            if (i == end) {
                jumps++;
                end = far;
            }
        }
        return jumps;
    }
}
