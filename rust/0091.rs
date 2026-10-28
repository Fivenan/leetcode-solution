impl Solution {
    pub fn num_decodings(s: String) -> i32 {
        let b=s.as_bytes();
        if b.is_empty() {
            return 0;
        }
        let (mut before,mut current)=(1i64,i64::from(b[0]!=b'0'));
        for i in 1..b.len() {
            let mut next=if b[i]!=b'0' {
                current
            }
            else {
                0
            };
            let pair=(b[i-1]-b'0')*10+b[i]-b'0';
            if (10..=26).contains(&pair) {
                next+=before;
            }
            before=current;
            current=next.min(i32::MAX as i64);
        }
        current as i32
    }
}
