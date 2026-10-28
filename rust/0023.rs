use std::cmp::Reverse;
use std::collections::BinaryHeap;
// ListNode is provided by the judge.
impl Solution {
    pub fn merge_k_lists(mut lists: Vec<Option<Box<ListNode>>>) -> Option<Box<ListNode>> {
        let mut heap = BinaryHeap::new();
        for (i, head) in lists.iter().enumerate() {
            if let Some(n) = head {
                heap.push(Reverse((n.val,i)));
            }
        }
        let mut out = None;
        let mut tail = &mut out;
        while let Some(Reverse((_,i))) = heap.pop() {
            if let Some(mut node) = lists[i].take() {
                lists[i] = node.next.take();
                if let Some(n) = &lists[i] {
                    heap.push(Reverse((n.val,i)));
                }
                *tail = Some(node);
                tail = &mut tail.as_mut().expect("just inserted").next;
            }
        }
        out
    }
}
