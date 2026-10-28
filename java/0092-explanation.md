# 92. Reverse Linked List II

[Official problem](https://leetcode.com/problems/reverse-linked-list-ii/)

## Problem

Reverse the inclusive sublist from one-based position left to right in a nonempty linked list, preserving other nodes. Bounds satisfy 1 ≤ left ≤ right ≤ length.

## Example input/output

head = [1,2,3,4,5], left = 2, right = 4 → [1,4,3,2,5]

## Approach

Find the predecessor of left using a dummy node. Repeatedly take the node after the sublist tail and insert it at the front of the sublist.

## Correctness

After each insertion, the processed portion of the sublist is reversed while its original first node remains the tail. Moving the next node to the front extends the reversal by one and preserves the untouched suffix.

## Complexity

O(n) time; O(1) auxiliary space; output reuses nodes.

## Edge cases

left = right, reversal including the head, and reversing the entire list.
