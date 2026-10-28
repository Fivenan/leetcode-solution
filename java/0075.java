import java.util.*;

class Solution {
    public void sortColors(int[] a) {
        int low = 0, i = 0, high = a.length - 1;
        while (i <= high) {
            if (a[i] == 0) {
                swap(a, low++, i++);
            } else if (a[i] == 2) {
                swap(a, i, high--);
            } else {
                i++;
            }
        }
    }

    private void swap(int[] a, int i, int j) {
        int t = a[i];
        a[i] = a[j];
        a[j] = t;
    }
}
