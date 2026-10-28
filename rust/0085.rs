impl Solution {
    pub fn maximal_rectangle(matrix: Vec<Vec<char>>) -> i32 {
        if matrix.is_empty() || matrix[0].is_empty() {
            return 0;
        }
        let cols=matrix[0].len();
        let mut heights=vec![0;cols];
        let mut best=0;
        for row in matrix {
            for c in 0..cols {
                heights[c]=if row[c]=='1' {
                    heights[c]+1
                }
                else {
                    0
                };
            }
            let mut stack:Vec<usize>=Vec::new();
            for i in 0..=cols {
                let current=if i==cols {
                    0
                }
                else {
                    heights[i]
                };
                while let Some(&top)=stack.last() {
                    if heights[top]<=current {
                        break;
                    }
                    stack.pop();
                    let width=stack.last().map_or(i,|&left|i-left-1);
                    best=best.max(heights[top]*width as i32);
                }
                stack.push(i);
            }
        }
        best
    }
}
