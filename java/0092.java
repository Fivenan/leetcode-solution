import java.util.*;

// ListNode and TreeNode, where used, are supplied by the LeetCode judge.
class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode d = new ListNode(0, head), before = d;
        for (int i = 1; i < left; i++) {
            before = before.next;
        }
        ListNode tail = before.next;
        for (int i = 0; i < right - left; i++) {
            ListNode move = tail.next;
            tail.next = move.next;
            move.next = before.next;
            before.next = move;
        }
        return d.next;
    }
}
