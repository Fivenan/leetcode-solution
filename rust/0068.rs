impl Solution {
    pub fn full_justify(words: Vec<String>, max_width: i32) -> Vec<String> {
        let width=max_width as usize;
        let mut out=Vec::new();
        let mut start=0;
        while start<words.len() {
            let mut end=start;
            let mut letters=0;
            while end<words.len() && letters+words[end].len()+end-start<=width {
                letters+=words[end].len();
                end+=1;
            }
            let gaps=end-start-1;
            let mut line=String::new();
            if end==words.len() || gaps==0 {
                for i in start..end {
                    if i>start {
                        line.push(' ');
                    }
                    line.push_str(&words[i]);
                }
                line.push_str(&" ".repeat(width-line.len()));
            }
            else {
                let spaces=width-letters;
                for i in start..end {
                    line.push_str(&words[i]);
                    if i+1<end {
                        line.push_str(&" ".repeat(spaces/gaps+usize::from(i-start<spaces%gaps)));
                    }
                }
            }
            out.push(line);
            start=end;
        }
        out
    }
}
