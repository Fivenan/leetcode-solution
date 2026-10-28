# 21. Merge Two Sorted Lists

[LeetCode problem](https://leetcode.com/problems/merge-two-sorted-lists/)

## Problem

Merge two sorted, possibly empty linked lists into one sorted list by splicing their existing nodes.

## Example

[1,2,4], [1,3,4] → [1,1,2,3,4,4]

## Approach

Repeatedly append the smaller current head, then attach the unexhausted suffix.

## Correctness

The smallest remaining value must be one of the two heads. Appending that head preserves sorted order and consumes exactly one node, eventually including every node.

## Complexity

Time: O(m+n). Auxiliary space: O(1). Output reuses the original nodes.

## Edge cases

Either or both inputs may be nil. Equal values from the first list are selected first.
