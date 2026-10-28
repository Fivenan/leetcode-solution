impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        let mut write = 0;
        for read in 0..nums.len() {
            if nums[read] != val {
                nums[write] = nums[read];
                write += 1;
            }
        }
        write as i32
    }
}
