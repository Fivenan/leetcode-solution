import java.util.*;

class Solution {
    public boolean search(int[] a, int target) {
        int l = 0, r = a.length - 1;
        while (l <= r) {
            int m = l + (r - l) / 2;
            if (a[m] == target) {
                return true;
            }
            if (a[l] == a[m] && a[m] == a[r]) {
                l++;
                r--;
            } else if (a[l] <= a[m]) {
                if (a[l] <= target && target < a[m]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                if (a[m] < target && target <= a[r]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
        }
        return false;
    }
}
