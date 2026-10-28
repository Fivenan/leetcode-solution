import java.util.*;

class Solution {
    public void solveSudoku(char[][] b) {
        int[] rows = new int[9], cols = new int[9], boxes = new int[9];
        List<int[]> empty = new ArrayList<>();
        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                if (b[r][c] == '.') {
                    empty.add(new int[] {
                        r, c
                    });
                } else {
                    int bit = 1 <<(b[r][c] - '1');
                    rows[r] |= bit;
                    cols[c] |= bit;
                    boxes[r / 3 * 3 + c / 3] |= bit;
                }
            }
        }
        solve(b, empty, 0, rows, cols, boxes);
    }

    private boolean solve(char[][] b, List<int[]> e, int i, int[] rows, int[] cols, int[] boxes) {
        if (i == e.size()) {
            return true;
        }
        int best = i, min = 10;
        for (int j = i; j < e.size(); j++) {
            int r = e.get(j)[0], c = e.get(j)[1], mask = 511 & ~(rows[r] | cols[c] | boxes[r / 3 * 3 + c / 3]);
            int count = Integer.bitCount(mask);
            if (count < min) {
                min = count;
                best = j;
            }
        }
        if (min == 0) {
            return false;
        }
        Collections.swap(e, i, best);
        int r = e.get(i)[0], c = e.get(i)[1], box = r / 3 * 3 + c / 3, mask = 511 & ~(rows[r] | cols[c] | boxes[box]);
        while (mask != 0) {
            int bit = mask & - mask;
            mask -= bit;
            rows[r] |= bit;
            cols[c] |= bit;
            boxes[box] |= bit;
            b[r][c] = (char)('1' + Integer.numberOfTrailingZeros(bit));
            if (solve(b, e, i + 1, rows, cols, boxes)) {
                return true;
            }
            rows[r] ^= bit;
            cols[c] ^= bit;
            boxes[box] ^= bit;
            b[r][c] = '.';
        }
        Collections.swap(e, i, best);
        return false;
    }
}
