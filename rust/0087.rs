impl Solution {
    pub fn is_scramble(s1: String, s2: String) -> bool {
        let (a,b)=(s1.as_bytes(),s2.as_bytes());
        let n=a.len();
        if n!=b.len() {
            return false;
        }
        if n==0 {
            return true;
        }
        let mut dp=vec![vec![vec![false;n];n];n+1];
        for i in 0..n {
            for j in 0..n {
                dp[1][i][j]=a[i]==b[j];
            }
        }
        for len in 2..=n {
            for i in 0..=n-len {
                for j in 0..=n-len {
                    for cut in 1..len {
                        if (dp[cut][i][j] && dp[len-cut][i+cut][j+cut]) || (dp[cut][i][j+len-cut] && dp[len-cut][i+cut][j]) {
                            dp[len][i][j]=true;
                            break;
                        }
                    }
                }
            }
        }
        dp[n][0][0]
    }
}
