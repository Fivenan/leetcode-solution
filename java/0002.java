import java.util.*;

// ListNode and TreeNode, where used, are supplied by the LeetCode judge.
class Solution {
    public ListNode addTwoNumbers(ListNode a, ListNode b) {
        ListNode dummy = new ListNode(0), tail = dummy;
        int carry = 0;
        while (a != null || b != null || carry != 0) {
            int s = carry;
            if (a != null) {
                s += a.val;
                a = a.next;
            }
            if (b != null) {
                s += b.val;
                b = b.next;
            }
            tail.next = new ListNode(s % 10);
            tail = tail.next;
            carry = s / 10;
        }
        return dummy.next;
    }
}
