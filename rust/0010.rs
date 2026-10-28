impl Solution {
    pub fn is_match(s: String, p: String) -> bool {
        let (s,p) = (s.as_bytes(),p.as_bytes());
        let mut prev = vec![false; p.len()+1];
        prev[0] = true;
        for j in 2..=p.len() {
            if p[j-1] == b'*' {
                prev[j] = prev[j-2];
            }
        }
        for &c in s {
            let mut next = vec![false; p.len()+1];
            for j in 1..=p.len() {
                if p[j-1] == b'*' {
                    next[j] = next[j-2] || ((p[j-2] == b'.' || p[j-2] == c) && prev[j]);
                }
                else {
                    next[j] = (p[j-1] == b'.' || p[j-1] == c) && prev[j-1];
                }
            }
            prev = next;
        }
        prev[p.len()]
    }
}
