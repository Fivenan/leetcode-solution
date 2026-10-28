import java.util.*;

class Solution {
    public int[][] insert(int[][] a, int[] v) {
        List<int[]> out = new ArrayList<>();
        int i = 0, start = v[0], end = v[1];
        while (i < a.length && a[i][1] < start) {
            out.add(a[i++].clone());
        }
        while (i < a.length && a[i][0] <= end) {
            start = Math.min(start, a[i][0]);
            end = Math.max(end, a[i][1]);
            i++;
        }
        out.add(new int[] {
            start, end
        });
        while (i < a.length) {
            out.add(a[i++].clone());
        }
        return out.toArray(new int[0][]);
    }
}
