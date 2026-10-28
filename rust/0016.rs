impl Solution {
    pub fn three_sum_closest(mut nums: Vec<i32>, target: i32) -> i32 {
        nums.sort_unstable();
        let target = target as i64;
        let mut best = nums[0] as i64 + nums[1] as i64 + nums[2] as i64;
        for i in 0..nums.len()-2 {
            let (mut l, mut r) = (i+1, nums.len()-1);
            while l < r {
                let sum = nums[i] as i64 + nums[l] as i64 + nums[r] as i64;
                if (sum-target).abs() < (best-target).abs() {
                    best = sum;
                }
                if sum == target {
                    return sum as i32;
                }
                if sum < target {
                    l += 1;
                }
                else {
                    r -= 1;
                }
            }
        }
        best as i32
    }
}
