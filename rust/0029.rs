impl Solution {
    pub fn divide(dividend: i32, divisor: i32) -> i32 {
        let negative = (dividend < 0) != (divisor < 0);
        let mut rest = (dividend as i64).abs();
        let d = (divisor as i64).abs();
        let mut quotient = 0i64;
        for shift in (0..32).rev() {
            if rest >= d << shift {
                rest -= d << shift;
                quotient |= 1i64 << shift;
            }
        }
        let result = if negative {
            -quotient
        }
        else {
            quotient
        };
        result.clamp(i32::MIN as i64,i32::MAX as i64) as i32
    }
}
