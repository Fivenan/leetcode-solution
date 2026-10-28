impl Solution {
    pub fn solve_n_queens(n: i32) -> Vec<Vec<String>> {
        fn visit(n:usize,cols:&mut [bool],down:&mut [bool],up:&mut [bool],path:&mut Vec<usize>,out:&mut Vec<Vec<String>>) {
            let r=path.len();
            if r==n {
                out.push(path.iter().map(|&c| {
                    let mut row=vec![b'.';n]; row[c]=b'Q'; row.into_iter().map(char::from).collect()
                }).collect());
                return;
            }
            for c in 0..n {
                let (d,u)=(r+c,r+n-1-c);
                if cols[c] || down[d] || up[u] {
                    continue;
                }
                cols[c]=true;
                down[d]=true;
                up[u]=true;
                path.push(c);
                visit(n,cols,down,up,path,out);
                path.pop();
                cols[c]=false;
                down[d]=false;
                up[u]=false;
            }
        }
        let n=n as usize;
        let mut out=Vec::new();
        visit(n,&mut vec![false;n],&mut vec![false;2*n-1],&mut vec![false;2*n-1],&mut Vec::new(),&mut out);
        out
    }
}
