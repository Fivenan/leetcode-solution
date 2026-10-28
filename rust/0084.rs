impl Solution {
    pub fn largest_rectangle_area(heights: Vec<i32>) -> i32 {
        let mut stack:Vec<usize>=Vec::new();
        let mut best=0;
        for i in 0..=heights.len() {
            let current=if i==heights.len() {
                0
            }
            else {
                heights[i]
            };
            while let Some(&top)=stack.last() {
                if heights[top]<=current {
                    break;
                }
                stack.pop();
                let width=stack.last().map_or(i,|&left|i-left-1);
                best=best.max(heights[top]*width as i32);
            }
            stack.push(i);
        }
        best
    }
}
