impl Solution {
    pub fn total_n_queens(n: i32) -> i32 {
        fn count(mask:u64,cols:u64,left:u64,right:u64) -> i32 {
            if cols==mask {
                return 1;
            }
            let mut free=mask & !(cols|left|right);
            let mut total=0;
            while free!=0 {
                let bit=free & free.wrapping_neg();
                free &= free-1;
                total+=count(mask,cols|bit,(left|bit)<<1,(right|bit)>>1);
            }
            total
        }
        count((1u64<<n)-1,0,0,0)
    }
}
