impl Solution {
    pub fn generate_parenthesis(n: i32) -> Vec<String> {
        fn visit(n: usize, open: usize, close: usize, s: &mut String, out: &mut Vec<String>) {
            if close == n {
                out.push(s.clone());
                return;
            }
            if open < n {
                s.push('(');
                visit(n,open+1,close,s,out);
                s.pop();
            }
            if close < open {
                s.push(')');
                visit(n,open,close+1,s,out);
                s.pop();
            }
        }
        let mut out = Vec::new();
        visit(n as usize,0,0,&mut String::new(),&mut out);
        out
    }
}
