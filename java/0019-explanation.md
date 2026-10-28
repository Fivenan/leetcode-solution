# 19. Remove Nth Node From End of List

[Official problem](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

## Problem

Remove the nth node from the end of a nonempty singly linked list and return its head. The given n is between one and the list length.

## Example input/output

head = [1,2,3,4,5], n = 2 → [1,2,3,5]

## Approach

Start both pointers at a dummy predecessor, advance the fast pointer n nodes, then move both until fast reaches the final node. Unlink slow.next.

## Correctness

The pointers remain n edges apart. When fast is last, slow precedes the nth-from-end node, so unlinking its successor removes precisely the requested node.

## Complexity

O(L) time; O(1) auxiliary space and output references. Existing nodes are relinked.

## Edge cases

Removing the head, tail, or sole node.
