impl Solution {
    pub fn letter_combinations(digits: String) -> Vec<String> {
        if digits.is_empty() {
            return Vec::new();
        }
        let keys = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
        let mut out = vec![String::new()];
        for d in digits.bytes() {
            let mut next = Vec::new();
            for prefix in out {
                for c in keys[(d-b'0') as usize].chars() {
                    let mut s = prefix.clone();
                    s.push(c);
                    next.push(s);
                }
            }
            out = next;
        }
        out
    }
}
