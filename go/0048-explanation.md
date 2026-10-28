# 48. Rotate Image

[LeetCode problem](https://leetcode.com/problems/rotate-image/)

## Problem

Rotate a square n×n matrix 90 degrees clockwise in place, without allocating another matrix.

## Example

[[1,2],[3,4]] → [[3,1],[4,2]]

## Approach

Transpose across the main diagonal, then reverse every row.

## Correctness

Transposition maps (r,c) to (c,r). Row reversal then maps it to (c,n-1-r), exactly the coordinate transformation for a clockwise quarter-turn.

## Complexity

Time: O(n²). Auxiliary space: O(1). Output overwrites the matrix.

## Edge cases

One cell stays unchanged. The square shape is guaranteed; odd dimensions keep the central cell fixed.
