import java.util.*;

// ListNode and TreeNode, where used, are supplied by the LeetCode judge.
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> q = new PriorityQueue<>(Comparator.comparingInt(a -> a.val));
        for (ListNode p : lists) {
            if (p != null) {
                q.add(p);
            }
        }
        ListNode d = new ListNode(0), t = d;
        while (!q.isEmpty()) {
            ListNode p = q.remove();
            if (p.next != null) {
                q.add(p.next);
            }
            t.next = p;
            t = p;
        }
        return d.next;
    }
}
