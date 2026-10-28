# 51. N-Queens

[Official problem](https://leetcode.com/problems/n-queens/)

## Problem

Return all placements of n queens on an n×n board with no shared row, column, or diagonal, for 1 ≤ n ≤ 9. Represent each board using Q and dot.

## Example input/output

n = 4 → two boards, with queen columns [1,3,0,2] and [2,0,3,1]

## Approach

Place one queen per row, using boolean column and diagonal occupancy arrays, and backtrack over legal columns. Build boards only for complete placements.

## Correctness

Every partial placement satisfies all attack constraints because occupied columns and both diagonal indices are excluded. Every valid board chooses one legal column in every row and therefore follows a unique search branch.

## Complexity

O(n·n! + Kn²) conservative time including scanning columns and output construction; O(n) auxiliary recursion/occupancy space; O(Kn²) output for K boards.

## Edge cases

n = 1, no solutions for n = 2 or 3, and both diagonal directions.
