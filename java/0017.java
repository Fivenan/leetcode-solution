import java.util.*;

class Solution {
    private static final String[] KEYS = {
        "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"
    };
    public List<String> letterCombinations(String digits) {
        List<String> out = new ArrayList<>();
        if (!digits.isEmpty()) {
            dfs(digits, 0, new StringBuilder(), out);
        }
        return out;
    }

    private void dfs(String s, int i, StringBuilder b, List<String> out) {
        if (i == s.length()) {
            out.add(b.toString());
            return;
        }
        for (char c : KEYS[s.charAt(i) - '0'].toCharArray()) {
            b.append(c);
            dfs(s, i + 1, b, out);
            b.setLength(b.length() - 1);
        }
    }
}
