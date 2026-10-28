# 59. Spiral Matrix II

[Official problem](https://leetcode.com/problems/spiral-matrix-ii/)

## Problem

Build an n×n matrix containing 1 through n² in clockwise spiral order, for positive n.

## Example input/output

n = 3 → [[1,2,3],[8,9,4],[7,6,5]]

## Approach

Use four shrinking rectangle boundaries and fill its top, right, bottom, and left sides with an increasing counter.

## Correctness

Each perimeter cell is visited once in spiral order, then removed from the remaining rectangle. The increasing counter thus assigns exactly 1..n² in the specified order.

## Complexity

O(n²) time; O(1) auxiliary space excluding O(n²) output.

## Edge cases

n = 1, even n, and odd n with a center cell.
