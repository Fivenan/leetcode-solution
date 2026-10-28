use std::cell::RefCell;
use std::rc::Rc;
// TreeNode is provided by the judge.
impl Solution {
    pub fn is_valid_bst(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        let mut current=root;
        let mut stack=Vec::new();
        let mut previous=None;
        while current.is_some() || !stack.is_empty() {
            while let Some(node)=current {
                current=node.borrow().left.clone();
                stack.push(node);
            }
            let node=stack.pop().expect("nonempty after descending");
            let borrowed=node.borrow();
            if previous.is_some_and(|p|p>=borrowed.val) {
                return false;
            }
            previous=Some(borrowed.val);
            current=borrowed.right.clone();
        }
        true
    }
}
