# 64. Minimum Path Sum

[LeetCode problem](https://leetcode.com/problems/minimum-path-sum/)

## Problem

Find the minimum sum of cell values along a top-left to bottom-right path in a nonempty nonnegative grid, moving only right or down.

## Example

[[1,3,1],[1,5,1],[4,2,1]] → 7

## Approach

Use rolling DP: the best cost at a cell is its value plus the smaller cost from above or left. Handle first-row and first-column boundaries explicitly.

## Correctness

Every path reaches a cell through one of its two permitted predecessors. Taking the cheaper optimal predecessor is sufficient because the current cell contributes the same value to either choice.

## Complexity

Time: O(mn). Auxiliary space: O(n). Output: O(1); input is unchanged.

## Edge cases

A one-cell grid returns that value. Single rows/columns have only one possible path; zero-valued cells require no special handling.
