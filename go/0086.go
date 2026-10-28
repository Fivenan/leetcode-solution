// ListNode is supplied by LeetCode.
func partition(head *ListNode, x int) *ListNode {
	small, large := &ListNode{}, &ListNode{}
	a, b := small, large
	for head != nil {
		next := head.Next
		head.Next = nil
		if head.Val < x {
			a.Next = head
			a = head
		} else {
			b.Next = head
			b = head
		}
		head = next
	}
	a.Next = large.Next
	return small.Next
}
