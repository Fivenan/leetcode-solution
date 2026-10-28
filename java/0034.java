import java.util.*;

class Solution {
    public int[] searchRange(int[] a, int t) {
        int l = bound(a, t, false);
        if (l == a.length || a[l] != t) {
            return new int[] {
                - 1, - 1
            };
        }
        return new int[] {
            l, bound(a, t, true) - 1
        };
    }

    private int bound(int[] a, int t, boolean upper) {
        int l = 0, r = a.length;
        while (l < r) {
            int m = l + (r - l) / 2;
            if (a[m] < t || (upper && a[m] == t)) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l;
    }
}
