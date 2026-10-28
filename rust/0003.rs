impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let mut last = [0usize; 256];
        let (mut left, mut best) = (0, 0);
        for (i, b) in s.bytes().enumerate() {
            left = left.max(last[b as usize]);
            best = best.max(i + 1 - left);
            last[b as usize] = i + 1;
        }
        best as i32
    }
}
