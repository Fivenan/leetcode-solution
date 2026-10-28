impl Solution {
    pub fn min_path_sum(grid: Vec<Vec<i32>>) -> i32 {
        let cols=grid[0].len();
        let mut dp=vec![i32::MAX/2;cols];
        dp[0]=0;
        for row in grid {
            for c in 0..cols {
                let left=if c>0 {
                    dp[c-1]
                }
                else {
                    i32::MAX/2
                };
                dp[c]=row[c]+dp[c].min(left);
            }
        }
        dp[cols-1]
    }
}
