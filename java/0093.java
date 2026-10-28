import java.util.*;

class Solution {
    public List<String> restoreIpAddresses(String s) {
        List<String> out = new ArrayList<>();
        dfs(s, 0, new ArrayList<>(), out);
        return out;
    }

    private void dfs(String s, int i, List<String> parts, List<String> out) {
        int remain = 4 - parts.size(), digits = s.length() - i;
        if (digits < remain || digits > 3 * remain) {
            return;
        }
        if (remain == 0) {
            out.add(String.join(".", parts));
            return;
        }
        int value = 0;
        for (int len = 1; len <= 3 && i + len <= s.length(); len++) {
            if (len > 1 && s.charAt(i) == '0') {
                break;
            }
            value = value * 10 + s.charAt(i + len - 1) - '0';
            if (value > 255) {
                break;
            }
            parts.add(s.substring(i, i + len));
            dfs(s, i + len, parts, out);
            parts.remove(parts.size() - 1);
        }
    }
}
