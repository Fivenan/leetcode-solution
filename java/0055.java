import java.util.*;

class Solution {
    public boolean canJump(int[] a) {
        int far = 0;
        for (int i = 0; i < a.length; i++) {
            if (i > far) {
                return false;
            }
            far = Math.max(far, i + a[i]);
            if (far >= a.length - 1) {
                return true;
            }
        }
        return true;
    }
}
