// ListNode is provided by the judge.
impl Solution {
    pub fn partition(mut head: Option<Box<ListNode>>, x: i32) -> Option<Box<ListNode>> {
        let (mut small,mut large)=(None,None);
        let (mut small_tail,mut large_tail)=(&mut small,&mut large);
        while let Some(mut node)=head.take() {
            head=node.next.take();
            if node.val<x {
                *small_tail=Some(node);
                small_tail=&mut small_tail.as_mut().expect("just inserted").next;
            }
            else {
                *large_tail=Some(node);
                large_tail=&mut large_tail.as_mut().expect("just inserted").next;
            }
        }
        *small_tail=large;
        small
    }
}
