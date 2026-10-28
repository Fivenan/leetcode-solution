impl Solution {
    pub fn unique_paths_with_obstacles(obstacle_grid: Vec<Vec<i32>>) -> i32 {
        let cols=obstacle_grid[0].len();
        let mut dp=vec![0i32;cols];
        dp[0]=1;
        for row in obstacle_grid {
            for c in 0..cols {
                if row[c]==1 {
                    dp[c]=0;
                }
                else if c>0 {
                    dp[c]=dp[c].saturating_add(dp[c-1]);
                }
            }
        }
        dp[cols-1]
    }
}
