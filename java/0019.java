import java.util.*;

// ListNode and TreeNode, where used, are supplied by the LeetCode judge.
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode d = new ListNode(0, head), fast = d, slow = d;
        for (int i = 0; i < n; i++) {
            fast = fast.next;
        }
        while (fast.next != null) {
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
        return d.next;
    }
}
