import java.util.*;

class Solution {
    public List<List<Integer>> threeSum(int[] a) {
        Arrays.sort(a);
        List<List<Integer>> out = new ArrayList<>();
        for (int i = 0; i < a.length - 2; i++) {
            if (i > 0 && a[i] == a[i - 1]) {
                continue;
            }
            int l = i + 1, r = a.length - 1;
            while (l < r) {
                long s = (long) a[i] + a[l] + a[r];
                if (s < 0) {
                    l++;
                } else if (s > 0) {
                    r--;
                } else {
                    out.add(List.of(a[i], a[l], a[r]));
                    int x = a[l], y = a[r];
                    while (l < r && a[l] == x) {
                        l++;
                    }
                    while (l < r && a[r] == y) {
                        r--;
                    }
                }
            }
        }
        return out;
    }
}
