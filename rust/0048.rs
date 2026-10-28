impl Solution {
    pub fn rotate(matrix: &mut Vec<Vec<i32>>) {
        let n=matrix.len();
        for r in 0..n {
            for c in r+1..n {
                let value=matrix[r][c];
                matrix[r][c]=matrix[c][r];
                matrix[c][r]=value;
            }
        }
        for row in matrix {
            row.reverse();
        }
    }
}
