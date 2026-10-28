impl Solution {
    pub fn max_sub_array(nums: Vec<i32>) -> i32 {
        let (mut ending,mut best)=(nums[0],nums[0]);
        for &x in &nums[1..] {
            ending=x.max(ending+x);
            best=best.max(ending);
        }
        best
    }
}
