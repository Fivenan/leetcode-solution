impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        if strs.is_empty() {
            return String::new();
        }
        let first = strs[0].as_bytes();
        let mut len = first.len();
        for s in &strs[1..] {
            len = first[..len].iter().zip(s.bytes()).take_while(|(a,b)| **a == *b).count();
        }
        strs[0][..len].to_owned()
    }
}
