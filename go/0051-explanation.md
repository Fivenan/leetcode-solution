# 51. N-Queens

[LeetCode problem](https://leetcode.com/problems/n-queens/)

## Problem

Place n queens on an n×n board so none attack each other. Return every arrangement as n strings using Q and dot, where 1≤n≤9.

## Example

n=4 → [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

## Approach

Place one queen per row. Track occupied columns and both diagonal indices; backtrack only through safe squares and build strings at complete placements.

## Correctness

One queen per row handles row conflicts, and the three occupancy checks eliminate all remaining attack directions. Every safe placement is explored once by its column sequence.

## Complexity

Time: O(n·n! + s·n²) conservative bound including column scans and s output boards. Auxiliary space: O(n), excluding O(s·n²) output.

## Edge cases

n=1 has one arrangement; n=2 and n=3 have none. Diagonal arrays use offsets to keep indices nonnegative.
