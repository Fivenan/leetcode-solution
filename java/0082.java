import java.util.*;

// ListNode and TreeNode, where used, are supplied by the LeetCode judge.
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode d = new ListNode(0, head), p = d;
        while (p.next != null) {
            ListNode cur = p.next;
            if (cur.next != null && cur.val == cur.next.val) {
                int v = cur.val;
                while (cur != null && cur.val == v) {
                    cur = cur.next;
                }
                p.next = cur;
            } else {
                p = p.next;
            }
        }
        return d.next;
    }
}
