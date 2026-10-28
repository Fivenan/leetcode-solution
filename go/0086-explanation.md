# 86. Partition List

[LeetCode problem](https://leetcode.com/problems/partition-list/)

## Problem

Reorder a linked list so nodes with values less than x precede nodes with values at least x, preserving original relative order within each group.

## Example

[1,4,3,2,5,2], x=3 → [1,2,2,4,3,5]

## Approach

Append existing nodes to two dummy-headed lists based on their comparison with x. Detach each node before appending and concatenate the lists at the end.

## Correctness

Each node is assigned to exactly its required group. Appending in encounter order preserves each group’s relative order, and concatenation places all smaller values first.

## Complexity

Time: O(n). Auxiliary space: O(1). Output reuses existing nodes.

## Edge cases

Empty input, no small nodes, no large nodes and values equal to x work. Explicit detachment prevents stale links or cycles.
