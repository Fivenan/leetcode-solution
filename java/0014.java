import java.util.*;

class Solution {
    public String longestCommonPrefix(String[] a) {
        for (int i = 0; i < a[0].length(); i++) {
            for (int j = 1; j < a.length; j++) {
                if (i == a[j].length() || a[j].charAt(i) != a[0].charAt(i)) {
                    return a[0].substring(0, i);
                }
            }
        }
        return a[0];
    }
}
