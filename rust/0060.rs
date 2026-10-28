impl Solution {
    pub fn get_permutation(n: i32, k: i32) -> String {
        let n=n as usize;
        let mut factorial=vec![1usize;n+1];
        for i in 1..=n {
            factorial[i]=factorial[i-1]*i;
        }
        let mut available:Vec<u8>=(1..=n).map(|x|b'0'+x as u8).collect();
        let mut rank=k as usize-1;
        let mut out=String::new();
        for rest in (1..=n).rev() {
            let block=factorial[rest-1];
            let index=rank/block;
            rank%=block;
            out.push(available.remove(index) as char);
        }
        out
    }
}
