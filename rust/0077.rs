impl Solution {
    pub fn combine(n: i32, k: i32) -> Vec<Vec<i32>> {
        fn visit(n:i32,k:usize,start:i32,path:&mut Vec<i32>,out:&mut Vec<Vec<i32>>) {
            if path.len()==k {
                out.push(path.clone());
                return;
            }
            let last=n-(k-path.len()) as i32+1;
            for value in start..=last {
                path.push(value);
                visit(n,k,value+1,path,out);
                path.pop();
            }
        }
        let mut out=Vec::new();
        visit(n,k as usize,1,&mut Vec::new(),&mut out);
        out
    }
}
