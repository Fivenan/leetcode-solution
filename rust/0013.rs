impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        fn value(b: u8) -> i32 {
            match b {
                b'I'=>1,b'V'=>5,b'X'=>10,b'L'=>50,b'C'=>100,b'D'=>500,b'M'=>1000,_=>0
            }
        }
        let b = s.as_bytes();
        let mut total = 0;
        for i in 0..b.len() {
            let v = value(b[i]);
            if i+1 < b.len() && v < value(b[i+1]) {
                total -= v;
            }
            else {
                total += v;
            }
        }
        total
    }
}
