# 23. Merge k Sorted Lists

[Official LeetCode problem](https://leetcode.com/problems/merge-k-sorted-lists/)

## Problem

Merge k sorted linked lists into one sorted list, allowing empty lists and an empty collection.

## Example input/output

[[1,4,5],[1,3,4],[2,6]] → [1,1,2,3,4,4,5,6].

## Approach

Keep one (head value, list index) entry per nonempty list in a min-heap. Pop the minimum, move its node into the output, and insert that list’s next head.

## Correctness

Each list’s head is its smallest remaining node, so the heap minimum is the smallest node anywhere. Replacing exactly that list’s representative preserves the invariant until every node has been emitted.

## Complexity

O(k + N log(k+1)) time for N nodes, O(k) auxiliary heap space. Output reuses the original nodes; the supplied list-head vector is updated in place and no nodes are cloned.

## Edge cases

An empty heap returns an empty list. The list index resolves equal-value ties without requiring ListNode to implement ordering.
