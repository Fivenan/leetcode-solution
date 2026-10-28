impl Solution {
    pub fn jump(nums: Vec<i32>) -> i32 {
        let (mut end,mut farthest,mut jumps)=(0usize,0usize,0);
        for i in 0..nums.len().saturating_sub(1) {
            farthest=farthest.max(i+nums[i] as usize);
            if i==end {
                jumps+=1;
                end=farthest;
            }
        }
        jumps
    }
}
