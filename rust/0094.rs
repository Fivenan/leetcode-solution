use std::cell::RefCell;
use std::rc::Rc;
// TreeNode is provided by the judge.
impl Solution {
    pub fn inorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        let mut current=root;
        let mut stack=Vec::new();
        let mut out=Vec::new();
        while current.is_some() || !stack.is_empty() {
            while let Some(node)=current {
                current=node.borrow().left.clone();
                stack.push(node);
            }
            let node=stack.pop().expect("nonempty after descending");
            let borrowed=node.borrow();
            out.push(borrowed.val);
            current=borrowed.right.clone();
        }
        out
    }
}
