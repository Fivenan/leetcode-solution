import java.util.*;

class Solution {
    public int divide(int dividend, int divisor) {
        if (dividend == Integer.MIN_VALUE && divisor == - 1) {
            return Integer.MAX_VALUE;
        }
        long a = Math.abs((long) dividend), b = Math.abs((long) divisor), q = 0;
        for (int i = 31; i >= 0; i--) {
            if ((b << i) <= a) {
                a -= b << i;
                q |= 1L << i;
            }
        }
        return (int)((dividend < 0) ^(divisor < 0) ? - q : q);
    }
}
