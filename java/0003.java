import java.util.*;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        int[] last = new int[65536];
        Arrays.fill(last, - 1);
        int left = 0, best = 0;
        for (int r = 0; r < s.length(); r++) {
            left = Math.max(left, last[s.charAt(r)] + 1);
            last[s.charAt(r)] = r;
            best = Math.max(best, r - left + 1);
        }
        return best;
    }
}
