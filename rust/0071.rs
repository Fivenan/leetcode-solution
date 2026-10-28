impl Solution {
    pub fn simplify_path(path: String) -> String {
        let mut parts=Vec::new();
        for part in path.split('/') {
            match part {
                "" | "." => {
                }, ".." => {
                    parts.pop();
                }, _ => parts.push(part)
            }
        }
        format!("/{}",parts.join("/"))
    }
}
