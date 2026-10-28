import java.util.*;

// ListNode and TreeNode, where used, are supplied by the LeetCode judge.
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode d = new ListNode(0, head), before = d;
        while (true) {
            ListNode end = before;
            for (int i = 0; i < k && end != null; i++) {
                end = end.next;
            }
            if (end == null) {
                break;
            }
            ListNode after = end.next, cur = before.next, prev = after, old = cur;
            while (cur != after) {
                ListNode next = cur.next;
                cur.next = prev;
                prev = cur;
                cur = next;
            }
            before.next = end;
            before = old;
        }
        return d.next;
    }
}
