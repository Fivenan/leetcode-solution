impl Solution {
    pub fn reverse(mut x: i32) -> i32 {
        let mut result = 0i32;
        while x != 0 {
            let digit = x % 10;
            x /= 10;
            match result.checked_mul(10).and_then(|v| v.checked_add(digit)) {
                Some(v) => result = v,
                None => return 0,
            }
        }
        result
    }
}
