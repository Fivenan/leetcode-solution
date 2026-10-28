use std::cell::RefCell;
use std::collections::HashMap;
use std::rc::Rc;

// TreeNode is provided by the judge.
impl Solution {
    pub fn generate_trees(n: i32) -> Vec<Option<Rc<RefCell<TreeNode>>>> {
        type Node = Option<Rc<RefCell<TreeNode>>>;
        type Forest = Rc<Vec<Node>>;

        fn build(lo: i32, hi: i32, memo: &mut HashMap<(i32, i32), Forest>) -> Forest {
            if lo > hi {
                return Rc::new(vec![None]);
            }
            if let Some(forest) = memo.get(&(lo, hi)) {
                return Rc::clone(forest);
            }
            let mut out = Vec::new();
            for value in lo..=hi {
                let left = build(lo, value - 1, memo);
                let right = build(value + 1, hi, memo);
                for l in left.iter() {
                    for r in right.iter() {
                        out.push(Some(Rc::new(RefCell::new(TreeNode {
                            val: value,
                            left: l.clone(),
                            right: r.clone(),
                        }))));
                    }
                }
            }
            let forest = Rc::new(out);
            memo.insert((lo, hi), Rc::clone(&forest));
            forest
        }
        if n == 0 {
            return Vec::new();
        }
        build(1, n, &mut HashMap::new()).as_ref().clone()
    }
}
