impl Solution {
    pub fn min_distance(mut word1: String, mut word2: String) -> i32 {
        if word1.len()<word2.len() {
            std::mem::swap(&mut word1,&mut word2);
        }
        let b=word2.as_bytes();
        let mut dp:Vec<i32>=(0..=b.len()).map(|x|x as i32).collect();
        for (i,a) in word1.bytes().enumerate() {
            let mut diagonal=dp[0];
            dp[0]=i as i32+1;
            for j in 1..=b.len() {
                let old=dp[j];
                dp[j]=if a==b[j-1] {
                    diagonal
                }
                else {
                    1+diagonal.min(old).min(dp[j-1])
                };
                diagonal=old;
            }
        }
        dp[b.len()]
    }
}
