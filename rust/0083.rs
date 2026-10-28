// ListNode is provided by the judge.
impl Solution {
    pub fn delete_duplicates(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut out=None;
        let mut tail=&mut out;
        while let Some(mut node)=head.take() {
            head=node.next.take();
            while head.as_ref().map(|n|n.val)==Some(node.val) {
                let mut duplicate=head.take().expect("matching head exists");
                head=duplicate.next.take();
            }
            *tail=Some(node);
            tail=&mut tail.as_mut().expect("just inserted").next;
        }
        out
    }
}
