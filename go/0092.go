// ListNode is supplied by LeetCode.
func reverseBetween(head *ListNode, left int, right int) *ListNode {
	dummy := &ListNode{Next: head}
	before := dummy
	for i := 1; i < left; i++ {
		before = before.Next
	}
	first := before.Next
	for i := 0; i < right-left; i++ {
		node := first.Next
		first.Next = node.Next
		node.Next = before.Next
		before.Next = node
	}
	return dummy.Next
}
