impl Solution {
    pub fn my_atoi(s: String) -> i32 {
        let b = s.as_bytes();
        let mut i = 0;
        while i < b.len() && b[i] == b' ' {
            i += 1;
        }
        let mut negative = false;
        if i < b.len() && (b[i] == b'+' || b[i] == b'-') {
            negative = b[i] == b'-';
            i += 1;
        }
        let limit = if negative {
            2147483648i64
        }
        else {
            2147483647i64
        };
        let mut value = 0i64;
        while i < b.len() && b[i].is_ascii_digit() {
            value = value * 10 + (b[i]-b'0') as i64;
            if value >= limit {
                return if negative {
                    i32::MIN
                }
                else {
                    i32::MAX
                };
            }
            i += 1;
        }
        if negative {
            -value as i32
        }
        else {
            value as i32
        }
    }
}
