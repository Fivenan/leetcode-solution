import java.util.*;

class Solution {
    public int removeElement(int[] a, int val) {
        int k = 0;
        for (int v : a) {
            if (v != val) {
                a[k++] = v;
            }
        }
        return k;
    }
}
