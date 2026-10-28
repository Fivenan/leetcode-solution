import java.util.*;

class Solution {
    public String addBinary(String a, String b) {
        StringBuilder out = new StringBuilder();
        int i = a.length() - 1, j = b.length() - 1, carry = 0;
        while (i >= 0 || j >= 0 || carry != 0) {
            int s = carry;
            if (i >= 0) {
                s += a.charAt(i--) - '0';
            }
            if (j >= 0) {
                s += b.charAt(j--) - '0';
            }
            out.append(s % 2);
            carry = s / 2;
        }
        return out.reverse().toString();
    }
}
