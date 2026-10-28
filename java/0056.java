import java.util.*;

class Solution {
    public int[][] merge(int[][] a) {
        Arrays.sort(a, Comparator.comparingInt(x -> x[0]));
        List<int[]> out = new ArrayList<>();
        for (int[] x : a) {
            if (out.isEmpty() || out.get(out.size() - 1)[1] < x[0]) {
                out.add(x.clone());
            } else {
                out.get(out.size() - 1)[1] = Math.max(out.get(out.size() - 1)[1], x[1]);
            }
        }
        return out.toArray(new int[0][]);
    }
}
