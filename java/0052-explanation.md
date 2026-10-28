# 52. N-Queens II

[Official problem](https://leetcode.com/problems/n-queens-ii/)

## Problem

Count placements of n nonattacking queens on an n×n board, for 1 ≤ n ≤ 9; do not return the boards.

## Example input/output

n = 4 → 2

## Approach

Use bit masks for occupied columns and diagonals at the current row. Extract each available low bit and recurse, shifting diagonal masks for the next row.

## Correctness

The available mask excludes exactly the squares attacked by previously placed queens. Each legal row choice is explored once, and reaching all occupied columns corresponds to one complete valid placement.

## Complexity

O(n!) conservative search time with constant-time bit operations for n ≤ 9; O(n) auxiliary recursion space; O(1) output.

## Edge cases

n = 1, unsatisfiable n = 2/3, and masking shifted diagonals to the board width.
