// ListNode is provided by the judge.
impl Solution {
    pub fn add_two_numbers(mut l1: Option<Box<ListNode>>, mut l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut dummy = Box::new(ListNode::new(0));
        let mut tail = &mut dummy;
        let mut carry = 0;
        while l1.is_some() || l2.is_some() || carry != 0 {
            let mut sum = carry;
            if let Some(mut n) = l1.take() {
                sum += n.val;
                l1 = n.next.take();
            }
            if let Some(mut n) = l2.take() {
                sum += n.val;
                l2 = n.next.take();
            }
            tail = tail.next.insert(Box::new(ListNode::new(sum % 10)));
            carry = sum / 10;
        }
        dummy.next
    }
}
