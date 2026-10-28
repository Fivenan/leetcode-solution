impl Solution {
    pub fn convert(s: String, num_rows: i32) -> String {
        let n = num_rows as usize;
        if n <= 1 || n >= s.len() {
            return s;
        }
        let mut rows = vec![String::new(); n];
        let (mut row, mut down) = (0usize, true);
        for c in s.chars() {
            rows[row].push(c);
            if row == 0 {
                down = true;
            }
            else if row == n-1 {
                down = false;
            }
            if down {
                row += 1;
            }
            else {
                row -= 1;
            }
        }
        rows.concat()
    }
}
