impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let mut write = 0;
        for read in 0..nums.len() {
            if write == 0 || nums[read] != nums[write-1] {
                nums[write] = nums[read];
                write += 1;
            }
        }
        write as i32
    }
}
