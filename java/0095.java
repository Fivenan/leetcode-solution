import java.util.*;

// ListNode and TreeNode, where used, are supplied by the LeetCode judge.
class Solution {
    public List<TreeNode> generateTrees(int n) {
        Map<String, List<TreeNode>> memo = new HashMap<>();
        List<TreeNode> out = new ArrayList<>();
        for (TreeNode t : build(1, n, memo)) {
            out.add(copy(t));
        }
        return out;
    }

    private List<TreeNode> build(int lo, int hi, Map<String, List<TreeNode>> memo) {
        String key = lo + ":" + hi;
        if (memo.containsKey(key)) {
            return memo.get(key);
        }
        List<TreeNode> out = new ArrayList<>();
        if (lo > hi) {
            out.add(null);
        } else {
            for (int r = lo; r <= hi; r++) {
                for (TreeNode l : build(lo, r - 1, memo)) {
                    for (TreeNode t : build(r + 1, hi, memo)) {
                        out.add(new TreeNode(r, l, t));
                    }
                }
            }
        }
        memo.put(key, out);
        return out;
    }

    private TreeNode copy(TreeNode t) {
        return t == null ? null : new TreeNode(t.val, copy(t.left), copy(t.right));
    }
}
