import java.util.*;

class Solution {
    public List<List<Integer>> permuteUnique(int[] a) {
        Arrays.sort(a);
        List<List<Integer>> out = new ArrayList<>();
        dfs(a, new boolean[a.length], new ArrayList<>(), out);
        return out;
    }

    private void dfs(int[] a, boolean[] used, List<Integer> p, List<List<Integer>> out) {
        if (p.size() == a.length) {
            out.add(new ArrayList<>(p));
            return;
        }
        for (int i = 0; i < a.length; i++) {
            if (used[i] || (i > 0 && a[i] == a[i - 1] && !used[i - 1])) {
                continue;
            }
            used[i] = true;
            p.add(a[i]);
            dfs(a, used, p, out);
            p.remove(p.size() - 1);
            used[i] = false;
        }
    }
}
