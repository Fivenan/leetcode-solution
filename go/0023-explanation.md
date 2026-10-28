# 23. Merge k Sorted Lists

[LeetCode problem](https://leetcode.com/problems/merge-k-sorted-lists/)

## Problem

Merge k sorted linked lists, including empty lists, into one sorted list. Nodes may be relinked.

## Example

[[1,4,5],[1,3,4],[2,6]] → [1,1,2,3,4,4,5,6]

## Approach

Store each nonempty list’s current head in a min-heap. Pop the smallest head, append it, and insert its successor.

## Correctness

Each list’s smallest unconsumed value is its head. Therefore the heap minimum is globally smallest, and replacing it with its successor preserves the invariant.

## Complexity

Time: O(k+N log(k+1)), N total nodes. Auxiliary space: O(k). Output reuses existing nodes.

## Edge cases

Zero lists, all-empty lists, repeated values and a single long list work. Input lists are assumed disjoint and acyclic.
