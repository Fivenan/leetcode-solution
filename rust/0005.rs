impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        // Separators make odd and even palindromes use the same radius.
        let mut transformed = vec![-1i32; 2 * s.len() + 1];
        for (i, b) in s.bytes().enumerate() {
            transformed[2 * i + 1] = b as i32;
        }
        let mut radius = vec![0usize; transformed.len()];
        let (mut center, mut right, mut best_start, mut best_len) = (0, 0, 0, 0);
        for i in 0..transformed.len() {
            if i < right {
                radius[i] = radius[2 * center - i].min(right - i);
            }
            while radius[i] < i
                && i + radius[i] + 1 < transformed.len()
                && transformed[i - radius[i] - 1] == transformed[i + radius[i] + 1]
            {
                radius[i] += 1;
            }
            if i + radius[i] > right {
                center = i;
                right = i + radius[i];
            }
            if radius[i] > best_len {
                best_len = radius[i];
                best_start = (i - radius[i]) / 2;
            }
        }
        s[best_start..best_start + best_len].to_owned()
    }
}
