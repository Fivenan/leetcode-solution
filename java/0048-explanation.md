# 48. Rotate Image

[Official problem](https://leetcode.com/problems/rotate-image/)

## Problem

Rotate a nonempty n×n matrix 90 degrees clockwise in place without allocating another matrix.

## Example input/output

matrix = [[1,2,3],[4,5,6],[7,8,9]] → [[7,4,1],[8,5,2],[9,6,3]]

## Approach

Transpose across the main diagonal, then reverse each row.

## Correctness

Transposition maps (r,c) to (c,r); row reversal maps that to (c,n-1-r), precisely the clockwise rotation coordinate. Every swap is in place.

## Complexity

O(n²) time; O(1) auxiliary space; in-place output.

## Edge cases

Odd dimensions with a fixed center, even dimensions, and n = 1.
