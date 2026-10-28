impl Solution {
    pub fn search_range(nums: Vec<i32>, target: i32) -> Vec<i32> {
        fn bound(a: &[i32], x: i32, upper: bool) -> usize {
            let (mut l,mut r)=(0,a.len());
            while l<r {
                let m=l+(r-l)/2;
                if a[m]<x || (upper && a[m]==x) {
                    l=m+1;
                }
                else {
                    r=m;
                }
            }
            l
        }
        let left=bound(&nums,target,false);
        if left==nums.len() || nums[left]!=target {
            vec![-1,-1]
        }
        else {
            vec![left as i32,(bound(&nums,target,true)-1) as i32]
        }
    }
}
