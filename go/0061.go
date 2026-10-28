// ListNode is supplied by LeetCode.
func rotateRight(head *ListNode, k int) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	length := 1
	tail := head
	for tail.Next != nil {
		tail = tail.Next
		length++
	}
	k %= length
	if k == 0 {
		return head
	}
	tail.Next = head
	newTail := head
	for i := 0; i < length-k-1; i++ {
		newTail = newTail.Next
	}
	newHead := newTail.Next
	newTail.Next = nil
	return newHead
}
