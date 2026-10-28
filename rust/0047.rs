impl Solution {
    pub fn permute_unique(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        fn visit(a:&[i32],used:&mut [bool],path:&mut Vec<i32>,out:&mut Vec<Vec<i32>>) {
            if path.len()==a.len() {
                out.push(path.clone());
                return;
            }
            for i in 0..a.len() {
                if used[i] || (i>0 && a[i]==a[i-1] && !used[i-1]) {
                    continue;
                }
                used[i]=true;
                path.push(a[i]);
                visit(a,used,path,out);
                path.pop();
                used[i]=false;
            }
        }
        nums.sort_unstable();
        let mut out=Vec::new();
        let mut used=vec![false;nums.len()];
        visit(&nums,&mut used,&mut Vec::new(),&mut out);
        out
    }
}
