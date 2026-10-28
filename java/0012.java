import java.util.*;

class Solution {
    public String intToRoman(int n) {
        int[] v = {
            1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
        };
        String[] s = {
            "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
        };
        StringBuilder b = new StringBuilder();
        for (int i = 0; i < v.length; i++) {
            while (n >= v[i]) {
                n -= v[i];
                b.append(s[i]);
            }
        }
        return b.toString();
    }
}
