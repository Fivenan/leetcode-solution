# 64. Minimum Path Sum

[Official problem](https://leetcode.com/problems/minimum-path-sum/)

## Problem

Find the minimum sum along a top-left to bottom-right path in a nonempty rectangular grid of nonnegative integers, moving only down or right. Judge bounds keep sums in int range.

## Example input/output

grid = [[1,3,1],[1,5,1],[4,2,1]] → 7

## Approach

Keep a rolling row of minimum costs, choosing the smaller of the above and left predecessor before adding the current cell.

## Correctness

Every path reaches a cell from above or left. The cheaper optimal predecessor followed by this cell gives the optimal cost, because replacing a nonoptimal prefix can only improve the path.

## Complexity

O(mn) time; O(n) auxiliary space; O(1) output. Input is unchanged.

## Edge cases

Single cell, one row/column, and zero-cost cells.
