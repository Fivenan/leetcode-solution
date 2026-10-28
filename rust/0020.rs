impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut stack = Vec::new();
        for b in s.bytes() {
            match b {
                b'(' => stack.push(b')'), b'[' => stack.push(b']'), b'{' => stack.push(b'}'),
                _ => if stack.pop() != Some(b) {
                    return false;
                },
            }
        }
        stack.is_empty()
    }
}
