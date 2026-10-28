# 54. Spiral Matrix

[LeetCode problem](https://leetcode.com/problems/spiral-matrix/)

## Problem

Return all elements of a rectangular matrix in clockwise spiral order, starting at the top-left.

## Example

[[1,2,3],[4,5,6],[7,8,9]] → [1,2,3,6,9,8,7,4,5]

## Approach

Maintain four boundaries of the unvisited rectangle. Traverse its top, right, bottom and left edges in sequence, shrinking each boundary after use.

## Correctness

Each traversal emits the current outer edge exactly once. Guards before bottom and left traversal prevent duplicating a remaining single row or column; the shrinking rectangle contains exactly the unvisited cells.

## Complexity

Time: O(mn). Auxiliary space: O(1), excluding O(mn) output.

## Edge cases

Single rows, single columns and a center cell work. Empty matrices are also tolerated.
