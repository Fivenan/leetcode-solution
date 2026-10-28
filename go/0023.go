import "container/heap"

// ListNode is supplied by LeetCode.
type nodeHeap []*ListNode

func (h nodeHeap) Len() int           { return len(h) }
func (h nodeHeap) Less(i, j int) bool { return h[i].Val < h[j].Val }
func (h nodeHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *nodeHeap) Push(x any)        { *h = append(*h, x.(*ListNode)) }
func (h *nodeHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	old[n-1] = nil
	*h = old[:n-1]
	return x
}
func mergeKLists(lists []*ListNode) *ListNode {
	h := nodeHeap{}
	for _, node := range lists {
		if node != nil {
			h = append(h, node)
		}
	}
	heap.Init(&h)
	dummy := &ListNode{}
	tail := dummy
	for len(h) > 0 {
		node := heap.Pop(&h).(*ListNode)
		if node.Next != nil {
			heap.Push(&h, node.Next)
		}
		tail.Next = node
		tail = node
	}
	return dummy.Next
}
