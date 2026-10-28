// ListNode is provided by the judge.
impl Solution {
    pub fn reverse_between(head: Option<Box<ListNode>>, left: i32, right: i32) -> Option<Box<ListNode>> {
        let mut dummy=Box::new(ListNode {
            val:0,next:head
        });
        let mut before=&mut dummy;
        for _ in 1..left {
            before=before.next.as_mut().expect("left within list");
        }
        let mut rest=before.next.take();
        let mut reversed=None;
        for _ in left..=right {
            let mut node=rest.take().expect("right within list");
            rest=node.next.take();
            node.next=reversed;
            reversed=Some(node);
        }
        let mut tail=reversed.as_mut();
        while let Some(node)=tail {
            if node.next.is_none() {
                node.next=rest;
                break;
            }
            tail=node.next.as_mut();
        }
        before.next=reversed;
        dummy.next
    }
}
