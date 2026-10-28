impl Solution {
    pub fn permute(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        fn visit(a:&mut Vec<i32>,pos:usize,out:&mut Vec<Vec<i32>>) {
            if pos==a.len() {
                out.push(a.clone());
                return;
            }
            for i in pos..a.len() {
                a.swap(pos,i);
                visit(a,pos+1,out);
                a.swap(pos,i);
            }
        }
        let mut out=Vec::new();
        visit(&mut nums,0,&mut out);
        out
    }
}
