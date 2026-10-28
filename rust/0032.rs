impl Solution {
    pub fn longest_valid_parentheses(s: String) -> i32 {
        let mut stack = vec![-1i32];
        let mut best = 0;
        for (i,b) in s.bytes().enumerate() {
            let i = i as i32;
            if b == b'(' {
                stack.push(i);
            }
            else {
                stack.pop();
                if let Some(&base) = stack.last() {
                    best = best.max(i-base);
                }
                else {
                    stack.push(i);
                }
            }
        }
        best
    }
}
