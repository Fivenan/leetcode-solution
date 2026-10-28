import java.util.*;

class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> out = new ArrayList<>();
        dfs(n, 0, 0, new StringBuilder(), out);
        return out;
    }

    private void dfs(int n, int o, int c, StringBuilder b, List<String> out) {
        if (c == n) {
            out.add(b.toString());
            return;
        }
        if (o < n) {
            b.append('(');
            dfs(n, o + 1, c, b, out);
            b.setLength(b.length() - 1);
        }
        if (c < o) {
            b.append(')');
            dfs(n, o, c + 1, b, out);
            b.setLength(b.length() - 1);
        }
    }
}
