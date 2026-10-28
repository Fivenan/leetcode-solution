# 92. Reverse Linked List II

[Official LeetCode problem](https://leetcode.com/problems/reverse-linked-list-ii/)

## Problem

Reverse nodes from one-based position left through right in a linked list, where 1 ≤ left ≤ right ≤ length.

## Example input/output

[1,2,3,4,5], left=2, right=4 → [1,4,3,2,5].

## Approach

Walk to the incoming link before left, detach and reverse exactly right−left+1 nodes, attach the untouched suffix to that reversed block’s tail, then reconnect the prefix.

## Correctness

The prefix and suffix retain their original order. Head insertion reverses exactly the selected block, and the two reconnections place it between those unchanged parts, giving precisely the specified reversal.

## Complexity

O(n) time and O(1) auxiliary space. Retained boxes are reused, with one temporary dummy node and no recursive copying.

## Edge cases

Reversing the whole list, a head prefix, a tail suffix, or one node works. Expects depend on the stated valid position bounds.
