// ListNode is supplied by LeetCode.
func deleteDuplicates(head *ListNode) *ListNode {
	dummy := &ListNode{Next: head}
	prev := dummy
	for head != nil {
		if head.Next != nil && head.Val == head.Next.Val {
			value := head.Val
			for head != nil && head.Val == value {
				head = head.Next
			}
			prev.Next = head
		} else {
			prev = head
			head = head.Next
		}
	}
	return dummy.Next
}
