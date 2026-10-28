// ListNode is provided by the judge.
impl Solution {
    pub fn merge_two_lists(mut list1: Option<Box<ListNode>>, mut list2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut out = None;
        let mut tail = &mut out;
        while list1.is_some() && list2.is_some() {
            let source = if list1.as_ref().map(|n| n.val) <= list2.as_ref().map(|n| n.val) {
                &mut list1
            }
            else {
                &mut list2
            };
            if let Some(mut node) = source.take() {
                *source = node.next.take();
                *tail = Some(node);
                tail = &mut tail.as_mut().expect("just inserted").next;
            }
        }
        *tail = if list1.is_some() {
            list1
        }
        else {
            list2
        };
        out
    }
}
