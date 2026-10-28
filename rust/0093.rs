impl Solution {
    pub fn restore_ip_addresses(s: String) -> Vec<String> {
        fn visit(s:&str,pos:usize,path:&mut Vec<String>,out:&mut Vec<String>) {
            let remaining=4-path.len();
            let bytes_left=s.len()-pos;
            if bytes_left<remaining || bytes_left>3*remaining {
                return;
            }
            if remaining==0 {
                out.push(path.join("."));
                return;
            }
            let b=s.as_bytes();
            let mut value=0u16;
            for len in 1..=3 {
                if pos+len>s.len() || (len>1 && b[pos]==b'0') {
                    break;
                }
                value=value*10+(b[pos+len-1]-b'0') as u16;
                if value>255 {
                    break;
                }
                path.push(s[pos..pos+len].to_owned());
                visit(s,pos+len,path,out);
                path.pop();
            }
        }
        let mut out=Vec::new();
        visit(&s,0,&mut Vec::new(),&mut out);
        out
    }
}
