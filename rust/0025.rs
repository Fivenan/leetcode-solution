// ListNode is provided by the judge.
impl Solution {
    pub fn reverse_k_group(mut head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
        let k = k as usize;
        let mut out = None;
        let mut tail = &mut out;
        loop {
            let mut probe = head.as_ref();
            let mut count = 0;
            while count < k {
                if let Some(n) = probe {
                    probe = n.next.as_ref();
                    count += 1;
                }
                else {
                    break;
                }
            }
            if count < k {
                *tail = head;
                break;
            }
            let mut reversed = None;
            for _ in 0..k {
                let mut node = head.take().expect("group length checked");
                head = node.next.take();
                node.next = reversed;
                reversed = Some(node);
            }
            *tail = reversed;
            for _ in 0..k {
                tail = &mut tail.as_mut().expect("complete group inserted").next;
            }
        }
        out
    }
}
