import java.util.*;

class Solution {
    public int threeSumClosest(int[] a, int target) {
        Arrays.sort(a);
        long best = (long) a[0] + a[1] + a[2];
        for (int i = 0; i < a.length - 2; i++) {
            int l = i + 1, r = a.length - 1;
            while (l < r) {
                long s = (long) a[i] + a[l] + a[r];
                if (Math.abs(s - target) < Math.abs(best - target)) {
                    best = s;
                }
                if (s == target) {
                    return (int) s;
                }
                if (s < target) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        return (int) best;
    }
}
