# 62. Unique Paths

[Official LeetCode problem](https://leetcode.com/problems/unique-paths/)

## Problem

Count paths from the top-left to bottom-right of a positive m×n grid, moving only right or down. The judge guarantees a result no greater than 2×10⁹.

## Example input/output

m=3, n=7 → 28.

## Approach

A path is determined by choosing the positions of its min(m,n)−1 moves in the smaller direction among m+n−2 total moves. Evaluate that binomial coefficient multiplicatively with exact integer divisions.

## Correctness

Every valid path has exactly m−1 down and n−1 right moves, establishing a bijection with the corresponding position subsets. After iteration i, ways equals C(steps−chosen+i,i), so the final value is exactly the number of these subsets.

## Complexity

O(min(m,n)) time and O(1) auxiliary/output space. Intermediate binomial values grow toward the bounded final result; each pre-division product is at most that result times 198 under dimensions≤100, safely inside i64.

## Edge cases

A single row or column needs no chosen moves and returns one. Positive dimensions and the promised answer≤2×10⁹ make the final i32 conversion safe.
