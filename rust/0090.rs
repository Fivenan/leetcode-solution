impl Solution {
    pub fn subsets_with_dup(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        fn visit(a:&[i32],start:usize,path:&mut Vec<i32>,out:&mut Vec<Vec<i32>>) {
            out.push(path.clone());
            for i in start..a.len() {
                if i>start && a[i]==a[i-1] {
                    continue;
                }
                path.push(a[i]);
                visit(a,i+1,path,out);
                path.pop();
            }
        }
        nums.sort_unstable();
        let mut out=Vec::new();
        visit(&nums,0,&mut Vec::new(),&mut out);
        out
    }
}
