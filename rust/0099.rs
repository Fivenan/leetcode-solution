use std::cell::RefCell;
use std::rc::Rc;

// TreeNode is provided by the judge.
impl Solution {
    pub fn recover_tree(root: &mut Option<Rc<RefCell<TreeNode>>>) {
        type Node = Option<Rc<RefCell<TreeNode>>>;

        fn visit(
            node: &Rc<RefCell<TreeNode>>,
            previous: &mut Node,
            first: &mut Node,
            second: &mut Node,
        ) {
            let value = node.borrow().val;
            if previous.as_ref().is_some_and(|p| p.borrow().val > value) {
                if first.is_none() {
                    *first = previous.clone();
                }
                *second = Some(Rc::clone(node));
            }
            *previous = Some(Rc::clone(node));
        }

        let mut current = root.clone();
        let (mut previous, mut first, mut second): (Node, Node, Node) = (None, None, None);
        while let Some(node) = current.take() {
            let left = node.borrow().left.clone();
            if let Some(left_root) = left {
                let mut predecessor = Rc::clone(&left_root);
                loop {
                    // End this immutable borrow before changing a right link.
                    let next = predecessor.borrow().right.clone();
                    match next {
                        Some(next) if !Rc::ptr_eq(&next, &node) => predecessor = next,
                        Some(_) => {
                            // Returning from the completed left subtree removes the thread.
                            predecessor.borrow_mut().right = None;
                            visit(&node, &mut previous, &mut first, &mut second);
                            current = node.borrow().right.clone();
                            break;
                        }
                        None => {
                            // This vacant link leads back after visiting the left subtree.
                            predecessor.borrow_mut().right = Some(Rc::clone(&node));
                            current = Some(left_root);
                            break;
                        }
                    }
                }
            } else {
                visit(&node, &mut previous, &mut first, &mut second);
                current = node.borrow().right.clone();
            }
        }

        // Finish traversal first, so every temporary Rc cycle is removed.
        if let (Some(a), Some(b)) = (first, second) {
            let av = a.borrow().val;
            let bv = b.borrow().val;
            a.borrow_mut().val = bv;
            b.borrow_mut().val = av;
        }
    }
}
