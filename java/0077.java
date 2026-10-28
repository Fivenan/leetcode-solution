import java.util.*;

class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> out = new ArrayList<>();
        dfs(1, n, k, new ArrayList<>(), out);
        return out;
    }

    private void dfs(int start, int n, int k, List<Integer> p, List<List<Integer>> out) {
        if (p.size() == k) {
            out.add(new ArrayList<>(p));
            return;
        }
        int remain = k - p.size();
        for (int v = start; v <= n - remain + 1; v++) {
            p.add(v);
            dfs(v + 1, n, k, p, out);
            p.remove(p.size() - 1);
        }
    }
}
