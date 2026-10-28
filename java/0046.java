import java.util.*;

class Solution {
    public List<List<Integer>> permute(int[] a) {
        List<List<Integer>> out = new ArrayList<>();
        dfs(a, 0, out);
        return out;
    }

    private void dfs(int[] a, int i, List<List<Integer>> out) {
        if (i == a.length) {
            List<Integer> p = new ArrayList<>();
            for (int v : a) {
                p.add(v);
            }
            out.add(p);
            return;
        }
        for (int j = i; j < a.length; j++) {
            swap(a, i, j);
            dfs(a, i + 1, out);
            swap(a, i, j);
        }
    }

    private void swap(int[] a, int i, int j) {
        int t = a[i];
        a[i] = a[j];
        a[j] = t;
    }
}
