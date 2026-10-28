impl Solution {
    pub fn three_sum(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        nums.sort_unstable();
        let mut out = Vec::new();
        for i in 0..nums.len().saturating_sub(2) {
            if i > 0 && nums[i] == nums[i-1] {
                continue;
            }
            let (mut l, mut r) = (i+1, nums.len()-1);
            while l < r {
                let sum = nums[i] as i64 + nums[l] as i64 + nums[r] as i64;
                if sum < 0 {
                    l += 1;
                }
                else if sum > 0 {
                    r -= 1;
                }
                else {
                    out.push(vec![nums[i],nums[l],nums[r]]);
                    l += 1;
                    r -= 1;
                    while l < r && nums[l] == nums[l-1] {
                        l += 1;
                    }
                    while l < r && nums[r] == nums[r+1] {
                        r -= 1;
                    }
                }
            }
        }
        out
    }
}
