import java.util.*;

class Solution {
    public int climbStairs(int n) {
        int index = n + 1;
        long a = 0, b = 1;
        for (int bit = Integer.highestOneBit(index); bit != 0; bit >>>= 1) {
            long even = a * (2 * b - a);
            long odd = a * a + b * b;
            if ((index & bit) == 0) {
                a = even;
                b = odd;
            } else {
                a = odd;
                b = even + odd;
            }
        }
        return (int) a;
    }
}
