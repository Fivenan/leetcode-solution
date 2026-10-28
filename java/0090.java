import java.util.*;

class Solution {
    public List<List<Integer>> subsetsWithDup(int[] a) {
        Arrays.sort(a);
        List<List<Integer>> out = new ArrayList<>();
        dfs(a, 0, new ArrayList<>(), out);
        return out;
    }

    private void dfs(int[] a, int start, List<Integer> p, List<List<Integer>> out) {
        out.add(new ArrayList<>(p));
        for (int i = start; i < a.length; i++) {
            if (i > start && a[i] == a[i - 1]) {
                continue;
            }
            p.add(a[i]);
            dfs(a, i + 1, p, out);
            p.remove(p.size() - 1);
        }
    }
}
