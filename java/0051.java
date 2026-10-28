import java.util.*;

class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> out = new ArrayList<>();
        dfs(0, n, new int[n], new boolean[n], new boolean[2 * n], new boolean[2 * n], out);
        return out;
    }

    private void dfs(int r, int n, int[] pos, boolean[] col, boolean[] d1, boolean[] d2, List<List<String>> out) {
        if (r == n) {
            List<String> b = new ArrayList<>();
            for (int c : pos) {
                char[] row = new char[n];
                Arrays.fill(row, '.');
                row[c] = 'Q';
                b.add(new String(row));
            }
            out.add(b);
            return;
        }
        for (int c = 0; c < n; c++) {
            int x = r + c, y = r - c + n;
            if (col[c] || d1[x] || d2[y]) {
                continue;
            }
            pos[r] = c;
            col[c] = d1[x] = d2[y] = true;
            dfs(r + 1, n, pos, col, d1, d2, out);
            col[c] = d1[x] = d2[y] = false;
        }
    }
}
