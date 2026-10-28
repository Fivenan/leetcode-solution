# 100. Same Tree

[LeetCode problem](https://leetcode.com/problems/same-tree/)

## Problem

Determine whether two binary trees have identical structure and equal values at every corresponding node.

## Example

[1,2,3] and [1,2,3] → true; [1,2] and [1,null,2] → false

## Approach

Compare corresponding nodes recursively. Nil positions must agree; nonnil positions must have equal values and recursively equal left and right subtrees.

## Correctness

The empty-tree base case is exact. A nonempty tree is completely specified by its root value and ordered child trees, so equality of all three components is necessary and sufficient.

## Complexity

Time: O(min(n,m)) nodes inspected before termination in the worst matching-prefix sense, bounded by O(n+m). Auxiliary space: O(h) recursive depth, with h the smaller tree’s compared-path height. Output: O(1).

## Edge cases

Both empty trees are equal; one empty tree differs. Equal values arranged in different child positions are rejected.
