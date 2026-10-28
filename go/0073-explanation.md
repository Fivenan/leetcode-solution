# 73. Set Matrix Zeroes

[LeetCode problem](https://leetcode.com/problems/set-matrix-zeroes/)

## Problem

For every zero in the original nonempty rectangular matrix, set its entire row and column to zero in place, using constant auxiliary space.

## Example

[[1,1,1],[1,0,1],[1,1,1]] → [[1,0,1],[0,0,0],[1,0,1]]

## Approach

Use the first row and column as markers, with separate booleans recording whether those marker boundaries originally contained a zero. Mark interior zeros before applying changes.

## Correctness

A marker becomes zero exactly when its row or column contains an original zero. Delaying all interior changes until marking completes prevents created zeros from propagating. The two booleans restore the correct boundary behavior.

## Complexity

Time: O(mn). Auxiliary space: O(1). Output is in place.

## Edge cases

A zero at [0][0], first-row-only zeros, first-column-only zeros and a one-cell matrix are correctly distinguished.
