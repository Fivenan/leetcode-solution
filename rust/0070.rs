impl Solution {
    pub fn climb_stairs(n: i32) -> i32 {
        // The answer is Fibonacci(n+1); (a,b) tracks consecutive values.
        let index = n as u32 + 1;
        let highest = 31 - index.leading_zeros();
        let (mut a, mut b) = (0i64, 1i64);
        for bit in (0..=highest).rev() {
            let even = a * (2 * b - a);
            let odd = a * a + b * b;
            if index & (1u32 << bit) == 0 {
                a = even;
                b = odd;
            } else {
                a = odd;
                b = even + odd;
            }
        }
        a as i32
    }
}
