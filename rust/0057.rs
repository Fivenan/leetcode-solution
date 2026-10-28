impl Solution {
    pub fn insert(intervals: Vec<Vec<i32>>, mut new_interval: Vec<i32>) -> Vec<Vec<i32>> {
        let mut out=Vec::new();
        let mut pending=true;
        for interval in intervals {
            if !pending || interval[1]<new_interval[0] {
                out.push(interval);
            }
            else if interval[0]>new_interval[1] {
                out.push(std::mem::take(&mut new_interval));
                pending=false;
                out.push(interval);
            }
            else {
                new_interval[0]=new_interval[0].min(interval[0]);
                new_interval[1]=new_interval[1].max(interval[1]);
            }
        }
        if pending {
            out.push(new_interval);
        }
        out
    }
}
