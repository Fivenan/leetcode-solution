impl Solution {
    pub fn is_match(s: String, p: String) -> bool {
        let p=p.as_bytes();
        let mut dp=vec![false;p.len()+1];
        dp[0]=true;
        for j in 1..=p.len() {
            dp[j]=dp[j-1] && p[j-1]==b'*';
        }
        for c in s.bytes() {
            let mut diagonal=dp[0];
            dp[0]=false;
            for j in 1..=p.len() {
                let old=dp[j];
                dp[j]=if p[j-1]==b'*' {
                    dp[j-1] || old
                }
                else {
                    diagonal && (p[j-1]==b'?' || p[j-1]==c)
                };
                diagonal=old;
            }
        }
        dp[p.len()]
    }
}
