impl Solution {
    pub fn count_and_say(n: i32) -> String {
        let mut current=String::from("1");
        for _ in 1..n {
            let bytes=current.as_bytes();
            let mut next=String::new();
            let mut i=0;
            while i<bytes.len() {
                let mut j=i+1;
                while j<bytes.len() && bytes[j]==bytes[i] {
                    j+=1;
                }
                next.push_str(&(j-i).to_string());
                next.push(bytes[i] as char);
                i=j;
            }
            current=next;
        }
        current
    }
}
