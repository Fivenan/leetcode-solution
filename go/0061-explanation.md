# 61. Rotate List

[LeetCode problem](https://leetcode.com/problems/rotate-list/)

## Problem

Rotate a linked list to the right by k positions, where k is nonnegative and may greatly exceed the list length.

## Example

[1,2,3,4,5], k=2 → [4,5,1,2,3]

## Approach

Measure the length, reduce k modulo it, temporarily join tail to head, then cut the cycle after length-k nodes.

## Correctness

A right rotation moves the final k nodes ahead of the first length-k nodes. The temporary cycle preserves their relative order, and cutting at the new boundary creates exactly that concatenation.

## Complexity

Time: O(n). Auxiliary space: O(1). Output reuses original nodes.

## Edge cases

Empty lists, a single node, k=0 and multiples of the list length return unchanged. The temporary cycle is always broken before return.
