# 48. Rotate Image

[Official LeetCode problem](https://leetcode.com/problems/rotate-image/)

## Problem

Rotate a square n×n matrix 90 degrees clockwise in place.

## Example input/output

[[1,2],[3,4]] → [[3,1],[4,2]].

## Approach

Transpose across the main diagonal, then reverse every row.

## Correctness

Transposition maps (r,c) to (c,r); row reversal maps that position to (c,n−1−r), exactly the clockwise rotation mapping. Every off-diagonal pair is swapped once.

## Complexity

O(n²) time and O(1) auxiliary/output space.

## Edge cases

A 1×1 matrix is unchanged; odd dimensions preserve their center. Sequential indexing avoids simultaneous conflicting mutable row borrows.
