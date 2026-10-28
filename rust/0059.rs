impl Solution {
    pub fn generate_matrix(n: i32) -> Vec<Vec<i32>> {
        let n=n as usize;
        let mut out=vec![vec![0;n];n];
        let mut value=1;
        let (mut top,mut bottom,mut left,mut right)=(0,n,0,n);
        while top<bottom && left<right {
            for c in left..right {
                out[top][c]=value;
                value+=1;
            }
            top+=1;
            for r in top..bottom {
                out[r][right-1]=value;
                value+=1;
            }
            right-=1;
            if top<bottom {
                bottom-=1;
                for c in (left..right).rev() {
                    out[bottom][c]=value;
                    value+=1;
                }
            }
            if left<right {
                for r in (top..bottom).rev() {
                    out[r][left]=value;
                    value+=1;
                }
                left+=1;
            }
        }
        out
    }
}
