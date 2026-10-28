// ListNode is provided by the judge.
impl Solution {
    pub fn swap_pairs(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut out = None;
        let mut tail = &mut out;
        while let Some(mut first) = head.take() {
            if let Some(mut second) = first.next.take() {
                head = second.next.take();
                second.next = Some(first);
                *tail = Some(second);
                tail = &mut tail.as_mut().expect("second inserted").next.as_mut().expect("first inserted").next;
            }
            else {
                *tail = Some(first);
                break;
            }
        }
        out
    }
}
