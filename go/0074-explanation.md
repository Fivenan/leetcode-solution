# 74. Search a 2D Matrix

[LeetCode problem](https://leetcode.com/problems/search-a-2d-matrix/)

## Problem

Each row is sorted, and the first value of every row is greater than the last value of the preceding row. Search a rectangular matrix in O(log(mn)) time.

## Example

[[1,3,5,7],[10,11,16,20],[23,30,34,60]], target=3 → true

## Approach

Treat the matrix as a flat sorted array without copying it. A flat index maps to row index/n and column index%n; perform lower-bound binary search.

## Correctness

The row-order condition makes row-major order globally sorted. The index mapping preserves that order, so ordinary binary search locates the only possible first target position.

## Complexity

Time: O(log(mn+1)). Auxiliary space and output: O(1).

## Edge cases

Targets smaller/larger than all values, a single row/column and empty input are handled.
