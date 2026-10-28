// TreeNode is supplied by LeetCode.
func generateTrees(n int) []*TreeNode {
	if n == 0 {
		return []*TreeNode{}
	}
	var clone func(*TreeNode) *TreeNode
	clone = func(node *TreeNode) *TreeNode {
		if node == nil {
			return nil
		}
		return &TreeNode{Val: node.Val, Left: clone(node.Left), Right: clone(node.Right)}
	}
	var build func(int, int) []*TreeNode
	build = func(lo, hi int) []*TreeNode {
		if lo > hi {
			return []*TreeNode{nil}
		}
		out := []*TreeNode{}
		for value := lo; value <= hi; value++ {
			left, right := build(lo, value-1), build(value+1, hi)
			for _, l := range left {
				for _, r := range right {
					out = append(out, &TreeNode{Val: value, Left: clone(l), Right: clone(r)})
				}
			}
		}
		return out
	}
	return build(1, n)
}
