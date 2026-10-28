impl Solution {
    pub fn my_sqrt(x: i32) -> i32 {
        if x<2 {
            return x;
        }
        let (mut left,mut right)=(1,x);
        let mut best=1;
        while left<=right {
            let mid=left+(right-left)/2;
            if mid<=x/mid {
                best=mid;
                left=mid+1;
            }
            else {
                right=mid-1;
            }
        }
        best
    }
}
