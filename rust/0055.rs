impl Solution {
    pub fn can_jump(nums: Vec<i32>) -> bool {
        let mut farthest=0usize;
        for (i,&jump) in nums.iter().enumerate() {
            if i>farthest {
                return false;
            }
            farthest=farthest.max(i+jump as usize);
            if farthest>=nums.len()-1 {
                return true;
            }
        }
        true
    }
}
