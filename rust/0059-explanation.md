# 59. Spiral Matrix II

[Official LeetCode problem](https://leetcode.com/problems/spiral-matrix-ii/)

## Problem

Fill an n×n matrix clockwise in spiral order with integers 1 through n² for positive n.

## Example input/output

n=3 → [[1,2,3],[8,9,4],[7,6,5]].

## Approach

Maintain the unfilled rectangle and assign increasing values along its top, right, bottom, and left edges before shrinking inward.

## Correctness

Each edge is visited in spiral order and removed from the unfilled rectangle exactly once. The counter advances after every cell, so all n² positions receive precisely the required sequential value.

## Complexity

O(n²) time and O(1) auxiliary state besides O(n²) output space.

## Edge cases

n=1 fills its single cell once. Dimension checks prevent repeating the middle row or column.
