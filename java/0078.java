import java.util.*;

class Solution {
    public List<List<Integer>> subsets(int[] a) {
        List<List<Integer>> out = new ArrayList<>();
        out.add(new ArrayList<>());
        for (int v : a) {
            int size = out.size();
            for (int i = 0; i < size; i++) {
                List<Integer> p = new ArrayList<>(out.get(i));
                p.add(v);
                out.add(p);
            }
        }
        return out;
    }
}
