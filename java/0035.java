import java.util.*;

class Solution {
    public int searchInsert(int[] a, int target) {
        int l = 0, r = a.length;
        while (l < r) {
            int m = l + (r - l) / 2;
            if (a[m] < target) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l;
    }
}
