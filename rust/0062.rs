impl Solution {
    pub fn unique_paths(m: i32, n: i32) -> i32 {
        let steps = (m + n - 2) as i64;
        let chosen = (m.min(n) - 1) as i64;
        let mut ways = 1i64;
        for i in 1..=chosen {
            ways = ways * (steps - chosen + i) / i;
        }
        ways as i32
    }
}
