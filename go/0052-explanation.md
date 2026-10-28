# 52. N-Queens II

[LeetCode problem](https://leetcode.com/problems/n-queens-ii/)

## Problem

Count the distinct ways to place n nonattacking queens on an n×n board, with 1≤n≤9.

## Example

n=4 → 2

## Approach

Represent used columns and diagonal attacks in row-relative bit masks. Extract each available bit and recurse to the next row, shifting diagonal masks.

## Correctness

Each bit identifies a safe column in the next row. Shifts move diagonal attacks to their next-row columns. Every valid column sequence is visited exactly once and contributes one at a complete placement.

## Complexity

Time: O(n!) conservative search-tree bound. Auxiliary space: O(n) recursion. Output: one count.

## Edge cases

n=1 counts one; n=2 and n=3 count zero. Mask width is safe under the stated small n bound.
