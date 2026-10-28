impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        let (h,n) = (haystack.as_bytes(),needle.as_bytes());
        if n.is_empty() {
            return 0;
        }
        let mut pi = vec![0usize;n.len()];
        for i in 1..n.len() {
            let mut j = pi[i-1];
            while j > 0 && n[i] != n[j] {
                j = pi[j-1];
            }
            if n[i] == n[j] {
                j += 1;
            }
            pi[i] = j;
        }
        let mut matched = 0;
        for (i,&b) in h.iter().enumerate() {
            while matched > 0 && b != n[matched] {
                matched = pi[matched-1];
            }
            if b == n[matched] {
                matched += 1;
            }
            if matched == n.len() {
                return (i+1-n.len()) as i32;
            }
        }
        -1
    }
}
