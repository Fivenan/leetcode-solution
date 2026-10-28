// TreeNode is supplied by LeetCode.
func isValidBST(root *TreeNode) bool {
	stack := []*TreeNode{}
	var previous *TreeNode
	for root != nil || len(stack) > 0 {
		for root != nil {
			stack = append(stack, root)
			root = root.Left
		}
		root = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		if previous != nil && previous.Val >= root.Val {
			return false
		}
		previous = root
		root = root.Right
	}
	return true
}
