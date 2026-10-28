impl Solution {
    pub fn length_of_last_word(s: String) -> i32 {
        s.bytes().rev().skip_while(|&b|b==b' ').take_while(|&b|b!=b' ').count() as i32
    }
}
