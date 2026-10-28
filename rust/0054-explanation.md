# 54. Spiral Matrix

[Official LeetCode problem](https://leetcode.com/problems/spiral-matrix/)

## Problem

Return all entries of a rectangular matrix in clockwise spiral order starting at its top-left corner.

## Example input/output

[[1,2,3],[4,5,6],[7,8,9]] → [1,2,3,6,9,8,7,4,5].

## Approach

Maintain a half-open unvisited rectangle and peel its top row, right column, bottom row, and left column, checking for exhausted dimensions.

## Correctness

Each peeled edge contains only unvisited entries, and shrinking its boundary removes exactly those entries. The edge order follows the spiral; the checks avoid revisiting a final row or column.

## Complexity

O(rows·cols) time, O(1) auxiliary state, and O(rows·cols) output space.

## Edge cases

Single rows, single columns, rectangular shapes, and an empty outer matrix are supported. Input is rectangular by contract.
