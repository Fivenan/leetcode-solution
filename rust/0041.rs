impl Solution {
    pub fn first_missing_positive(mut nums: Vec<i32>) -> i32 {
        let n=nums.len();
        for i in 0..n {
            while nums[i]>0 && nums[i] as usize<=n {
                let j=nums[i] as usize-1;
                if nums[j]==nums[i] {
                    break;
                }
                nums.swap(i,j);
            }
        }
        for (i,&x) in nums.iter().enumerate() {
            if x!=i as i32+1 {
                return i as i32+1;
            }
        }
        n as i32+1
    }
}
