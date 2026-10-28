// ListNode is supplied by LeetCode.
func reverseKGroup(head *ListNode, k int) *ListNode {
	dummy := &ListNode{Next: head}
	before := dummy
	for {
		last := before
		for i := 0; i < k && last != nil; i++ {
			last = last.Next
		}
		if last == nil {
			break
		}
		after := last.Next
		prev, cur := after, before.Next
		for cur != after {
			next := cur.Next
			cur.Next = prev
			prev = cur
			cur = next
		}
		oldFirst := before.Next
		before.Next = last
		before = oldFirst
	}
	return dummy.Next
}
