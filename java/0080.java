import java.util.*;

class Solution {
    public int removeDuplicates(int[] a) {
        int k = 0;
        for (int v : a) {
            if (k < 2 || v != a[k - 2]) {
                a[k++] = v;
            }
        }
        return k;
    }
}
