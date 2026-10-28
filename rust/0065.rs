impl Solution {
    pub fn is_number(s: String) -> bool {
        let bytes=s.as_bytes();
        let (mut digit,mut dot,mut exponent)=(false,false,false);
        for (i,&b) in bytes.iter().enumerate() {
            match b {
                b'0'..=b'9' => digit=true,
                b'+' | b'-' => if i!=0 && bytes[i-1]!=b'e' && bytes[i-1]!=b'E' {
                    return false;
                },
                b'.' => {
                    if dot || exponent {
                        return false;
                    }
                    dot=true;
                }
                b'e' | b'E' => {
                    if exponent || !digit {
                        return false;
                    }
                    exponent=true;
                    digit=false;
                }
                _ => return false,
            }
        }
        digit
    }
}
