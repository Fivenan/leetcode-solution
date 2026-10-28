import java.util.*;

class Solution {
    public boolean isValidSudoku(char[][] b) {
        int[] rows = new int[9], cols = new int[9], boxes = new int[9];
        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                if (b[r][c] != '.') {
                    int bit = 1 <<(b[r][c] - '1'), box = r / 3 * 3 + c / 3;
                    if ((rows[r] & bit) != 0 || (cols[c] & bit) != 0 || (boxes[box] & bit) != 0) {
                        return false;
                    }
                    rows[r] |= bit;
                    cols[c] |= bit;
                    boxes[box] |= bit;
                }
            }
        }
        return true;
    }
}
