import java.util.*;

class Solution {
    public double findMedianSortedArrays(int[] a, int[] b) {
        if (a.length > b.length) {
            return findMedianSortedArrays(b, a);
        }
        int m = a.length, n = b.length, lo = 0, hi = m;
        while (lo <= hi) {
            int i = (lo + hi) >>> 1, j = (m + n + 1) / 2 - i;
            int al = i == 0 ? Integer.MIN_VALUE : a[i - 1], ar = i == m ? Integer.MAX_VALUE : a[i], bl = j == 0 ? Integer.MIN_VALUE : b[j - 1], br = j == n ? Integer.MAX_VALUE : b[j];
            if (al <= br && bl <= ar) {
                if ((m + n) % 2 == 1) {
                    return Math.max(al, bl);
                }
                return ((long) Math.max(al, bl) + Math.min(ar, br)) / 2.0;
            }
            if (al > br) {
                hi = i - 1;
            } else {
                lo = i + 1;
            }
        }
        throw new IllegalArgumentException();
    }
}
