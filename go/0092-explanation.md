# 92. Reverse Linked List II

[LeetCode problem](https://leetcode.com/problems/reverse-linked-list-ii/)

## Problem

Reverse the nodes from 1-based position left through right in a linked list, where 1≤left≤right≤length. Perform one traversal.

## Example

[1,2,3,4,5], left=2, right=4 → [1,4,3,2,5]

## Approach

Find the segment’s predecessor. Repeatedly take the node after the segment’s original first node and insert it immediately after the predecessor.

## Correctness

After j moves, the first j+1 original segment nodes appear reversed, followed by the untouched remainder. Each insertion grows that reversed prefix by one while preserving the outside links.

## Complexity

Time: O(n), specifically O(right). Auxiliary space: O(1). Output reuses nodes.

## Edge cases

Reversing from the head, reversing the full list and left=right work. Valid position bounds are guaranteed.
