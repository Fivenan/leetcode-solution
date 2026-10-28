# 52. N-Queens II

[Official LeetCode problem](https://leetcode.com/problems/n-queens-ii/)

## Problem

Count nonattacking n-queen arrangements for the judge’s small positive n (at most 9).

## Example input/output

n=4 → 2; n=1 → 1.

## Approach

Use bit masks for occupied columns and attacked diagonals in the current row. Recurse once per available bit, shifting diagonal attacks for the next row.

## Correctness

The available mask contains exactly columns safe from all previously placed queens. Selecting each bit enumerates every legal next placement once. Reaching all columns occupied means n safe placements, so summing leaves counts every valid board once.

## Complexity

O(n!) as a loose upper bound on legal-placement search nodes, with O(n) recursion space and O(1) output. Fixed-width mask operations are constant time under n≤9.

## Edge cases

n=2 and n=3 produce zero; the mask excludes shifted diagonal bits outside the board.
