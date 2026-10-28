impl Solution {
    pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
        let (mut rows,mut cols,mut boxes)=([0u16;9],[0u16;9],[0u16;9]);
        for r in 0..9 {
            for c in 0..9 {
                if board[r][c]=='.' {
                    continue;
                }
                let bit=1u16 << (board[r][c] as u8-b'1');
                let b=r/3*3+c/3;
                if rows[r]&bit != 0 || cols[c]&bit != 0 || boxes[b]&bit != 0 {
                    return false;
                }
                rows[r]|=bit;
                cols[c]|=bit;
                boxes[b]|=bit;
            }
        }
        true
    }
}
