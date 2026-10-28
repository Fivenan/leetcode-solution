import java.util.*;

// ListNode and TreeNode, where used, are supplied by the LeetCode judge.
class Solution {
    public boolean isValidBST(TreeNode root) {
        Deque<TreeNode> st = new ArrayDeque<>();
        long prev = Long.MIN_VALUE;
        TreeNode cur = root;
        while (cur != null || !st.isEmpty()) {
            while (cur != null) {
                st.push(cur);
                cur = cur.left;
            }
            cur = st.pop();
            if (cur.val <= prev) {
                return false;
            }
            prev = cur.val;
            cur = cur.right;
        }
        return true;
    }
}
