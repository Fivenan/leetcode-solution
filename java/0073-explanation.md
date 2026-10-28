# 73. Set Matrix Zeroes

[Official problem](https://leetcode.com/problems/set-matrix-zeroes/)

## Problem

For each zero in the original rectangular matrix, set its entire row and column to zero in place, using constant auxiliary space.

## Example input/output

matrix = [[1,1,1],[1,0,1],[1,1,1]] → [[1,0,1],[0,0,0],[1,0,1]]

## Approach

Record whether the first row/column originally has zeros. Use their remaining cells as markers for interior zeros, apply markers to the interior, then zero the first boundaries if recorded.

## Correctness

Each original interior zero sets exactly its row and column markers. Applying them afterward avoids confusing newly written zeros with original ones; separate flags preserve the first-row/column information overwritten by markers.

## Complexity

O(mn) time; O(1) auxiliary space; in-place output.

## Edge cases

A zero at (0,0), a zero only in the first row or column, and single-row/column matrices.
