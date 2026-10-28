impl Solution {
    pub fn min_window(s: String, t: String) -> String {
        if t.is_empty() {
            return String::new();
        }
        let mut need=[0i32;128];
        for b in t.bytes() {
            need[b as usize]+=1;
        }
        let bytes=s.as_bytes();
        let (mut left,mut missing)=(0,t.len());
        let mut best=(0,usize::MAX);
        for (right,&b) in bytes.iter().enumerate() {
            if need[b as usize]>0 {
                missing-=1;
            }
            need[b as usize]-=1;
            while missing==0 {
                if right+1-left<best.1 {
                    best=(left,right+1-left);
                }
                let old=bytes[left] as usize;
                need[old]+=1;
                left+=1;
                if need[old]>0 {
                    missing+=1;
                }
            }
        }
        if best.1==usize::MAX {
            String::new()
        }
        else {
            s[best.0..best.0+best.1].to_owned()
        }
    }
}
