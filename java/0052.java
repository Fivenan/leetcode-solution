import java.util.*;

class Solution {
    public int totalNQueens(int n) {
        return dfs((1 << n) - 1, 0, 0, 0);
    }

    private int dfs(int all, int cols, int left, int right) {
        if (cols == all) {
            return 1;
        }
        int free = all & ~(cols | left | right), count = 0;
        while (free != 0) {
            int bit = free & - free;
            free -= bit;
            count += dfs(all, cols | bit,((left | bit) << 1) & all,(right | bit) >>> 1);
        }
        return count;
    }
}
