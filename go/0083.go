// ListNode is supplied by LeetCode.
func deleteDuplicates(head *ListNode) *ListNode {
	for node := head; node != nil && node.Next != nil; {
		if node.Val == node.Next.Val {
			node.Next = node.Next.Next
		} else {
			node = node.Next
		}
	}
	return head
}
