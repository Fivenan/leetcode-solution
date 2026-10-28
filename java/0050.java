import java.util.*;

class Solution {
    public double myPow(double x, int n) {
        long e = n;
        if (e < 0) {
            x = 1 / x;
            e = - e;
        }
        double out = 1;
        while (e > 0) {
            if ((e & 1) == 1) {
                out *= x;
            }
            x *= x;
            e >>= 1;
        }
        return out;
    }
}
