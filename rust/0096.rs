impl Solution {
    pub fn num_trees(n: i32) -> i32 {
        let mut catalan=1i64;
        for k in 0..n as i64 {
            catalan=catalan*2*(2*k+1)/(k+2);
        }
        catalan as i32
    }
}
