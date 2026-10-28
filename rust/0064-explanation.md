# 64. Minimum Path Sum

[Official LeetCode problem](https://leetcode.com/problems/minimum-path-sum/)

## Problem

Find the minimum sum along a top-left to bottom-right path in a nonempty rectangular nonnegative grid, moving only right or down.

## Example input/output

[[1,3,1],[1,5,1],[4,2,1]] → 7.

## Approach

Use one-row dynamic programming, replacing each entry by its value plus the smaller of its old top cost and updated left cost.

## Correctness

Every path to a cell ends at one of those two predecessors. Choosing their smaller minimum and adding the cell cost therefore yields the minimum for that cell by induction in row-major order.

## Complexity

O(rows·cols) time and O(cols) auxiliary space; O(1) output.

## Edge cases

One cell, a single row or column, and zero-cost cells work. The large sentinel is above all valid path costs under judge limits, with room for an added cell.
