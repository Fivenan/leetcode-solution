import java.util.*;

// ListNode and TreeNode, where used, are supplied by the LeetCode judge.
class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null || head.next == null) {
            return head;
        }
        int n = 1;
        ListNode tail = head;
        while (tail.next != null) {
            tail = tail.next;
            n++;
        }
        k %= n;
        if (k == 0) {
            return head;
        }
        tail.next = head;
        ListNode before = head;
        for (int i = 1; i < n - k; i++) {
            before = before.next;
        }
        ListNode out = before.next;
        before.next = null;
        return out;
    }
}
