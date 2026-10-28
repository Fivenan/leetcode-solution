// ListNode is provided by the judge.
impl Solution {
    pub fn rotate_right(mut head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
        let mut len=0;
        let mut cursor=head.as_ref();
        while let Some(node)=cursor {
            len+=1;
            cursor=node.next.as_ref();
        }
        if len==0 {
            return head;
        }
        let shift=k as usize%len;
        if shift==0 {
            return head;
        }
        let mut split=&mut head;
        for _ in 0..len-shift {
            split=&mut split.as_mut().expect("split within counted length").next;
        }
        let mut new_head=split.take();
        let mut tail=new_head.as_mut();
        while let Some(node)=tail {
            if node.next.is_none() {
                node.next=head;
                break;
            }
            tail=node.next.as_mut();
        }
        new_head
    }
}
