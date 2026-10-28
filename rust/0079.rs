impl Solution {
    pub fn exist(mut board: Vec<Vec<char>>, word: String) -> bool {
        fn search(board:&mut Vec<Vec<char>>,word:&[u8],i:usize,r:usize,c:usize) -> bool {
            if board[r][c]!=word[i] as char {
                return false;
            }
            if i+1==word.len() {
                return true;
            }
            let saved=board[r][c];
            board[r][c]='#';
            let mut found=false;
            for (dr,dc) in [(-1i32,0i32),(1,0),(0,-1),(0,1)] {
                let (nr,nc)=(r as i32+dr,c as i32+dc);
                if nr>=0 && nc>=0 && (nr as usize)<board.len() && (nc as usize)<board[0].len() && search(board,word,i+1,nr as usize,nc as usize) {
                    found=true;
                    break;
                }
            }
            board[r][c]=saved;
            found
        }
        if word.is_empty() {
            return true;
        }
        if board.is_empty() || board[0].is_empty() || word.len()>board.len()*board[0].len() {
            return false;
        }
        for r in 0..board.len() {
            for c in 0..board[0].len() {
                if search(&mut board,word.as_bytes(),0,r,c) {
                    return true;
                }
            }
        }
        false
    }
}
