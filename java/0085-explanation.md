# 85. Maximal Rectangle

[Official problem](https://leetcode.com/problems/maximal-rectangle/)

## Problem

Return the area of the largest all-1 axis-aligned rectangle in a nonempty binary character matrix.

## Example input/output

matrix = ["10100","10111","11111","10010"] → 6

## Approach

Accumulate consecutive-one heights ending at each row and solve a largest-histogram-rectangle problem for those heights using a monotonic stack.

## Correctness

Every all-1 rectangle has a bottom row. At that row its columns have heights at least the rectangle height, so it is considered by the histogram search; conversely every histogram rectangle describes only 1 cells above that row.

## Complexity

O(mn) time; O(n) auxiliary height/stack space; O(1) output.

## Edge cases

All zeros, all ones, single row/column, and zeros resetting accumulated heights.
