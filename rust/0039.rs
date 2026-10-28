impl Solution {
    pub fn combination_sum(mut candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
        fn visit(a:&[i32], start:usize, rest:i32, path:&mut Vec<i32>, out:&mut Vec<Vec<i32>>) {
            if rest==0 {
                out.push(path.clone());
                return;
            }
            for i in start..a.len() {
                if a[i]>rest {
                    break;
                }
                path.push(a[i]);
                visit(a,i,rest-a[i],path,out);
                path.pop();
            }
        }
        candidates.sort_unstable();
        let mut out=Vec::new();
        visit(&candidates,0,target,&mut Vec::new(),&mut out);
        out
    }
}
