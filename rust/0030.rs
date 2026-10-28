use std::collections::HashMap;
impl Solution {
    pub fn find_substring(s: String, words: Vec<String>) -> Vec<i32> {
        if words.is_empty() || words[0].is_empty() {
            return Vec::new();
        }
        let width = words[0].len();
        let bytes = s.as_bytes();
        let mut required = HashMap::new();
        for word in &words {
            *required.entry(word.as_bytes()).or_insert(0usize) += 1;
        }
        let mut out = Vec::new();
        for offset in 0..width.min(bytes.len()) {
            let (mut left,mut right,mut count) = (offset,offset,0usize);
            let mut seen: HashMap<&[u8],usize> = HashMap::new();
            while right+width <= bytes.len() {
                let word = &bytes[right..right+width];
                right += width;
                if let Some(&limit) = required.get(word) {
                    *seen.entry(word).or_insert(0) += 1;
                    count += 1;
                    while seen.get(word).copied().unwrap_or(0) > limit {
                        let old = &bytes[left..left+width];
                        if let Some(v) = seen.get_mut(old) {
                            *v -= 1;
                        }
                        left += width;
                        count -= 1;
                    }
                    if count == words.len() {
                        out.push(left as i32);
                    }
                }
                else {
                    seen.clear();
                    count = 0;
                    left = right;
                }
            }
        }
        out
    }
}
