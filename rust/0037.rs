impl Solution {
    pub fn solve_sudoku(board: &mut Vec<Vec<char>>) {
        fn solve(board: &mut Vec<Vec<char>>, empty: &mut Vec<(usize,usize)>, pos: usize, rows: &mut [u16;9], cols: &mut [u16;9], boxes: &mut [u16;9]) -> bool {
            if pos==empty.len() {
                return true;
            }
            let mut best=pos;
            let mut fewest=10;
            for i in pos..empty.len() {
                let (r,c)=empty[i];
                let count=(!(rows[r]|cols[c]|boxes[r/3*3+c/3])&0x1ff).count_ones();
                if count<fewest {
                    fewest=count;
                    best=i;
                }
            }
            if fewest==0 {
                return false;
            }
            empty.swap(pos,best);
            let (r,c)=empty[pos];
            let b=r/3*3+c/3;
            let mut choices=!(rows[r]|cols[c]|boxes[b])&0x1ff;
            while choices!=0 {
                let bit=choices & choices.wrapping_neg();
                choices &= choices-1;
                rows[r]|=bit;
                cols[c]|=bit;
                boxes[b]|=bit;
                board[r][c]=(b'1'+bit.trailing_zeros() as u8) as char;
                if solve(board,empty,pos+1,rows,cols,boxes) {
                    return true;
                }
                rows[r]^=bit;
                cols[c]^=bit;
                boxes[b]^=bit;
            }
            board[r][c]='.';
            empty.swap(pos,best);
            false
        }
        let (mut rows,mut cols,mut boxes)=([0u16;9],[0u16;9],[0u16;9]);
        let mut empty=Vec::new();
        for r in 0..9 {
            for c in 0..9 {
                if board[r][c]=='.' {
                    empty.push((r,c));
                }
                else {
                    let bit=1u16 << (board[r][c] as u8-b'1');
                    rows[r]|=bit;
                    cols[c]|=bit;
                    boxes[r/3*3+c/3]|=bit;
                }
            }
        }
        solve(board,&mut empty,0,&mut rows,&mut cols,&mut boxes);
    }
}
