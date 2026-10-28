impl Solution {
    pub fn set_zeroes(matrix: &mut Vec<Vec<i32>>) {
        let (rows,cols)=(matrix.len(),matrix[0].len());
        let zero_row=matrix[0].iter().any(|&x|x==0);
        let zero_col=matrix.iter().any(|r|r[0]==0);
        for r in 1..rows {
            for c in 1..cols {
                if matrix[r][c]==0 {
                    matrix[r][0]=0;
                    matrix[0][c]=0;
                }
            }
        }
        for r in 1..rows {
            for c in 1..cols {
                if matrix[r][0]==0 || matrix[0][c]==0 {
                    matrix[r][c]=0;
                }
            }
        }
        if zero_row {
            matrix[0].fill(0);
        }
        if zero_col {
            for row in matrix {
                row[0]=0;
            }
        }
    }
}
