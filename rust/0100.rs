use std::cell::RefCell;
use std::rc::Rc;
// TreeNode is provided by the judge.
impl Solution {
    pub fn is_same_tree(p: Option<Rc<RefCell<TreeNode>>>, q: Option<Rc<RefCell<TreeNode>>>) -> bool {
        let mut stack=vec![(p,q)];
        while let Some((a,b))=stack.pop() {
            match (a,b) {
                (None,None) => {
                },
                (Some(a),Some(b)) => {
                    let (a,b)=(a.borrow(),b.borrow());
                    if a.val!=b.val {
                        return false;
                    }
                    stack.push((a.left.clone(),b.left.clone()));
                    stack.push((a.right.clone(),b.right.clone()));
                }
                _ => return false,
            }
        }
        true
    }
}
