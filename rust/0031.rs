impl Solution {
    pub fn next_permutation(nums: &mut Vec<i32>) {
        if nums.len() < 2 {
            return;
        }
        let mut pivot = nums.len()-1;
        while pivot > 0 && nums[pivot-1] >= nums[pivot] {
            pivot -= 1;
        }
        if pivot > 0 {
            let mut j = nums.len()-1;
            while nums[j] <= nums[pivot-1] {
                j -= 1;
            }
            nums.swap(pivot-1,j);
        }
        nums[pivot..].reverse();
    }
}
