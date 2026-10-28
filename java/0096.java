import java.util.*;

class Solution {
    public int numTrees(int n) {
        long count = 1;
        for (int k = 0; k < n; k++) {
            count = count * 2 * (2 * k + 1) / (k + 2);
        }
        return (int) count;
    }
}
