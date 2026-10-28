import java.util.*;

class Solution {
    public boolean isScramble(String a, String b) {
        if (a.length() != b.length()) {
            return false;
        }
        int n = a.length();
        return dfs(a, b, 0, 0, n, new byte[n][n][n + 1]);
    }

    private boolean dfs(String a, String b, int i, int j, int len, byte[][][] memo) {
        if (memo[i][j][len] != 0) {
            return memo[i][j][len] == 1;
        }
        boolean equal = true;
        int[] count = new int[26];
        for (int k = 0; k < len; k++) {
            char x = a.charAt(i + k), y = b.charAt(j + k);
            if (x != y) {
                equal = false;
            }
            count[x - 'a']++;
            count[y - 'a']--;
        }
        if (equal) {
            memo[i][j][len] = 1;
            return true;
        }
        for (int c : count) {
            if (c != 0) {
                memo[i][j][len] = - 1;
                return false;
            }
        }
        for (int cut = 1; cut < len; cut++) {
            if (dfs(a, b, i, j, cut, memo) && dfs(a, b, i + cut, j + cut, len - cut, memo) || dfs(a, b, i, j + len - cut, cut, memo) && dfs(a, b, i + cut, j, len - cut, memo)) {
                memo[i][j][len] = 1;
                return true;
            }
        }
        memo[i][j][len] = - 1;
        return false;
    }
}
