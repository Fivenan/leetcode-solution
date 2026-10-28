# 19. Remove Nth Node From End of List

[LeetCode problem](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

## Problem

Remove the nth node counted from the end of a nonempty linked list. n is guaranteed to be between one and the list length.

## Example

[1,2,3,4,5], n = 2 → [1,2,3,5]

## Approach

Use a dummy predecessor, move fast n links ahead, then move fast and slow together until fast is last. Bypass slow’s next node.

## Correctness

The maintained n-link gap means that when fast is last, slow is immediately before the nth node from the end. Bypassing that node removes precisely the requested element.

## Complexity

Time: O(L). Auxiliary space: O(1). Existing list nodes are relinked; no output nodes are allocated.

## Edge cases

Removing the head, tail or sole node works because the dummy supplies a predecessor. Invalid n is outside the contract.
