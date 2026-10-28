# 19. Remove Nth Node From End of List

[Official LeetCode problem](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

## Problem

Remove the nth node counted from the end of a nonempty list, where 1 ≤ n ≤ length.

## Example input/output

[1,2,3,4,5], n=2 → [1,2,3,5].

## Approach

Count the list length through immutable references, then walk a mutable reference from a dummy node to the predecessor of position length−n and detach the target.

## Correctness

The target has exactly n−1 successors, hence zero-based index length−n. The predecessor walk reaches that position’s incoming link, and replacing it with the target’s next link removes exactly that node.

## Complexity

O(L) time over two passes and O(1) auxiliary space. Output reuses the retained input nodes; only a dummy node is allocated and discarded.

## Edge cases

Removing the head, tail, or only node works through the dummy link. The expect documents an invariant established by the judge’s valid n contract.
