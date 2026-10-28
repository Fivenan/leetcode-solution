# 21. Merge Two Sorted Lists

[Official LeetCode problem](https://leetcode.com/problems/merge-two-sorted-lists/)

## Problem

Merge two sorted singly linked lists into one sorted list.

## Example input/output

[1,2,4] and [1,3,4] → [1,1,2,3,4,4].

## Approach

Repeatedly detach the smaller head and attach that owned node to the output’s tail; attach the final unconsumed suffix directly.

## Correctness

Each chosen head is no greater than either remaining head, so appending it preserves sorted order and cannot skip a smaller remaining value. Once one list ends, the other suffix is already sorted and belongs next.

## Complexity

O(m+n) time and O(1) auxiliary space. The output reuses all input boxes without cloning values or allocating list nodes.

## Edge cases

Empty lists and equal head values are supported. Mutable links avoid raw pointers; expects refer only to a node just inserted.
