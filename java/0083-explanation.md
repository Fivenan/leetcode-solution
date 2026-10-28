# 83. Remove Duplicates from Sorted List

[Official problem](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

## Problem

From a nondecreasing linked list, retain one node for each distinct value and remove its later duplicates.

## Example input/output

head = [1,1,2,3,3] → [1,2,3]

## Approach

At each node repeatedly bypass an equal-valued next node; advance only when the next value differs.

## Correctness

All copies of a value are contiguous by sortedness. Bypassing equal successors leaves one representative, and advancing after the run preserves every distinct value exactly once.

## Complexity

O(n) time; O(1) auxiliary space; output reuses nodes.

## Edge cases

Empty list, one value repeated throughout, and no duplicates.
