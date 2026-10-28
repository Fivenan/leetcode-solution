use std::collections::HashMap;
impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        let mut groups:HashMap<[u32;26],Vec<String>>=HashMap::new();
        for s in strs {
            let mut counts=[0u32;26];
            for b in s.bytes() {
                counts[(b-b'a') as usize]+=1;
            }
            groups.entry(counts).or_default().push(s);
        }
        groups.into_values().collect()
    }
}
