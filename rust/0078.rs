impl Solution {
    pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut out=vec![Vec::new()];
        for value in nums {
            let len=out.len();
            for i in 0..len {
                let mut next=out[i].clone();
                next.push(value);
                out.push(next);
            }
        }
        out
    }
}
