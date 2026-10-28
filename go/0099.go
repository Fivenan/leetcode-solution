// TreeNode is supplied by LeetCode.
func recoverTree(root *TreeNode) {
	var previous, first, second *TreeNode
	visit := func(node *TreeNode) {
		if previous != nil && previous.Val > node.Val {
			if first == nil {
				first = previous
			}
			second = node
		}
		previous = node
	}
	current := root
	for current != nil {
		if current.Left == nil {
			visit(current)
			current = current.Right
		} else {
			pred := current.Left
			for pred.Right != nil && pred.Right != current {
				pred = pred.Right
			}
			if pred.Right == nil {
				pred.Right = current
				current = current.Left
			} else {
				pred.Right = nil
				visit(current)
				current = current.Right
			}
		}
	}
	if first != nil {
		first.Val, second.Val = second.Val, first.Val
	}
}
