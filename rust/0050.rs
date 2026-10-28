impl Solution {
    pub fn my_pow(mut x: f64, n: i32) -> f64 {
        let mut power=n as i64;
        if power<0 {
            x=1.0/x;
            power=-power;
        }
        let mut out=1.0;
        while power>0 {
            if power&1==1 {
                out*=x;
            }
            x*=x;
            power>>=1;
        }
        out
    }
}
