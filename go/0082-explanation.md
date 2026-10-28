# 82. Remove Duplicates from Sorted List II

[LeetCode problem](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)

## Problem

From a sorted linked list, delete every value that appears more than once, retaining only values whose total frequency is one.

## Example

[1,2,3,3,4,4,5] → [1,2,5]

## Approach

Keep a predecessor of the next candidate run. If a run repeats, skip the whole equal-value run and reconnect the predecessor; otherwise retain its sole node.

## Correctness

Sorting makes every value’s occurrences contiguous. Processing each complete run therefore correctly decides whether to retain its single node or remove all its nodes.

## Complexity

Time: O(n). Auxiliary space: O(1). Output reuses retained nodes.

## Edge cases

Repeated values at the head or tail, all-duplicate lists, nil input and an already distinct list work.
