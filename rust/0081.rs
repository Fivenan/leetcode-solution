impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> bool {
        let (mut left,mut right)=(0,nums.len());
        while left<right {
            let mid=left+(right-left)/2;
            if nums[mid]==target {
                return true;
            }
            if nums[left]==nums[mid] && nums[mid]==nums[right-1] {
                left+=1;
                right-=1;
            }
            else if nums[left]<=nums[mid] {
                if nums[left]<=target && target<nums[mid] {
                    right=mid;
                }
                else {
                    left=mid+1;
                }
            }
            else if nums[mid]<target && target<=nums[right-1] {
                left=mid+1;
            }
            else {
                right=mid;
            }
        }
        false
    }
}
