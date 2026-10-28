impl Solution {
    pub fn trap(height: Vec<i32>) -> i32 {
        if height.is_empty() {
            return 0;
        }
        let (mut left,mut right)=(0,height.len()-1);
        let (mut lm,mut rm,mut water)=(0,0,0);
        while left<right {
            if height[left]<=height[right] {
                lm=lm.max(height[left]);
                water+=lm-height[left];
                left+=1;
            }
            else {
                rm=rm.max(height[right]);
                water+=rm-height[right];
                right-=1;
            }
        }
        water
    }
}
