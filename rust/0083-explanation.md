# 83. Remove Duplicates from Sorted List

[Official LeetCode problem](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

## Problem

Remove duplicates from a sorted linked list while keeping one node for each distinct value.

## Example input/output

[1,1,2,3,3] → [1,2,3].

## Approach

Detach the first node of each equal-value run, drop subsequent equal nodes, and append the retained node.

## Correctness

Sorted order makes a run contain all copies of one value. Keeping exactly its first node and preserving run order produces exactly one copy of every distinct value in sorted order.

## Complexity

O(n) time and O(1) auxiliary space. Surviving output nodes reuse their boxes; duplicates are detached before dropping.

## Edge cases

Empty input, one node, and an all-equal list work without special cases.
