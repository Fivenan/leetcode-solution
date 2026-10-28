# 83. Remove Duplicates from Sorted List

[LeetCode problem](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

## Problem

Remove duplicate nodes from a sorted linked list so each distinct value appears once, retaining sorted order.

## Example

[1,1,2,3,3] → [1,2,3]

## Approach

Walk the list and bypass the next node whenever it equals the current value; otherwise advance.

## Correctness

Equal values form consecutive runs. Keeping the first node and repeatedly bypassing equal successors leaves exactly one representative of each run without affecting other values.

## Complexity

Time: O(n). Auxiliary space: O(1). Output reuses nodes.

## Edge cases

Empty lists, one node, a long equal run and all-distinct lists work.
