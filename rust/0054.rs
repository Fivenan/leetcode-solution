impl Solution {
    pub fn spiral_order(matrix: Vec<Vec<i32>>) -> Vec<i32> {
        if matrix.is_empty() {
            return Vec::new();
        }
        let (mut top,mut bottom,mut left,mut right)=(0,matrix.len(),0,matrix[0].len());
        let mut out=Vec::new();
        while top<bottom && left<right {
            for c in left..right {
                out.push(matrix[top][c]);
            }
            top+=1;
            for r in top..bottom {
                out.push(matrix[r][right-1]);
            }
            right-=1;
            if top<bottom {
                bottom-=1;
                for c in (left..right).rev() {
                    out.push(matrix[bottom][c]);
                }
            }
            if left<right {
                for r in (top..bottom).rev() {
                    out.push(matrix[r][left]);
                }
                left+=1;
            }
        }
        out
    }
}
