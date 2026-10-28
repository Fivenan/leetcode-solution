import java.util.*;

class Solution {
    public List<List<Integer>> combinationSum2(int[] a, int target) {
        Arrays.sort(a);
        List<List<Integer>> out = new ArrayList<>();
        dfs(a, 0, target, new ArrayList<>(), out);
        return out;
    }

    private void dfs(int[] a, int start, int left, List<Integer> p, List<List<Integer>> out) {
        if (left == 0) {
            out.add(new ArrayList<>(p));
            return;
        }
        for (int i = start; i < a.length && a[i] <= left; i++) {
            if (i > start && a[i] == a[i - 1]) {
                continue;
            }
            p.add(a[i]);
            dfs(a, i + 1, left - a[i], p, out);
            p.remove(p.size() - 1);
        }
    }
}
