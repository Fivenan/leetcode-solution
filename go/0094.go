// TreeNode is supplied by LeetCode: struct { Val int; Left, Right *TreeNode }.
func inorderTraversal(root *TreeNode) []int {
	out := make([]int, 0)
	stack := []*TreeNode{}
	for root != nil || len(stack) > 0 {
		for root != nil {
			stack = append(stack, root)
			root = root.Left
		}
		root = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		out = append(out, root.Val)
		root = root.Right
	}
	return out
}
