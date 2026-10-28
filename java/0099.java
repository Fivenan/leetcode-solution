import java.util.*;

// ListNode and TreeNode, where used, are supplied by the LeetCode judge.
class Solution {
    public void recoverTree(TreeNode root) {
        TreeNode cur = root, prev = null, first = null, second = null;
        while (cur != null) {
            if (cur.left != null) {
                TreeNode pred = cur.left;
                while (pred.right != null && pred.right != cur) {
                    pred = pred.right;
                }
                if (pred.right == null) {
                    pred.right = cur;
                    cur = cur.left;
                    continue;
                }
                pred.right = null;
            }
            if (prev != null && prev.val > cur.val) {
                if (first == null) {
                    first = prev;
                }
                second = cur;
            }
            prev = cur;
            cur = cur.right;
        }
        if (first != null) {
            int v = first.val;
            first.val = second.val;
            second.val = v;
        }
    }
}
