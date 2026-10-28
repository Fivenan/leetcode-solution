// ListNode is provided by the judge.
impl Solution {
    pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {
        let mut len = 0;
        let mut cursor = head.as_ref();
        while let Some(node) = cursor {
            len += 1;
            cursor = node.next.as_ref();
        }
        let mut dummy = Box::new(ListNode {
            val: 0, next: head
        });
        let mut before = &mut dummy;
        for _ in 0..len-n {
            before = before.next.as_mut().expect("position precedes existing node");
        }
        if let Some(mut removed) = before.next.take() {
            before.next = removed.next.take();
        }
        dummy.next
    }
}
