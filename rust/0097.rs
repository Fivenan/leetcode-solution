impl Solution {
    pub fn is_interleave(mut s1: String, mut s2: String, s3: String) -> bool {
        if s1.len()+s2.len()!=s3.len() {
            return false;
        }
        if s1.len()<s2.len() {
            std::mem::swap(&mut s1,&mut s2);
        }
        let (a,b,c)=(s1.as_bytes(),s2.as_bytes(),s3.as_bytes());
        let mut dp=vec![false;b.len()+1];
        dp[0]=true;
        for j in 1..=b.len() {
            dp[j]=dp[j-1] && b[j-1]==c[j-1];
        }
        for i in 1..=a.len() {
            dp[0]=dp[0] && a[i-1]==c[i-1];
            for j in 1..=b.len() {
                dp[j]=(dp[j] && a[i-1]==c[i+j-1]) || (dp[j-1] && b[j-1]==c[i+j-1]);
            }
        }
        dp[b.len()]
    }
}
