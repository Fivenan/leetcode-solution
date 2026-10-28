import java.util.*;

// ListNode and TreeNode, where used, are supplied by the LeetCode judge.
class Solution {
    public ListNode partition(ListNode head, int x) {
        ListNode low = new ListNode(0), high = new ListNode(0), l = low, h = high;
        while (head != null) {
            if (head.val < x) {
                l.next = head;
                l = head;
            } else {
                h.next = head;
                h = head;
            }
            head = head.next;
        }
        h.next = null;
        l.next = high.next;
        return low.next;
    }
}
