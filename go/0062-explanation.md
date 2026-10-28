# 62. Unique Paths

[LeetCode problem](https://leetcode.com/problems/unique-paths/)

## Problem

Count paths from the top-left to bottom-right of an m×n grid, moving only right or down. Both dimensions are 1..100; the answer is guaranteed at most 2×10⁹.

## Example

m=3, n=7 → 28

## Approach

Every path uses m−1 moves in one direction and n−1 in the other, so choose the positions of the smaller move count among m+n−2 steps. Compute the binomial coefficient multiplicatively: starting at one, repeatedly multiply by m−1+i and divide by i, after swapping dimensions to make n the smaller one. Use int64 for intermediate products.

## Correctness

Choosing the n−1 positions of one move direction uniquely determines a valid path, and every valid path determines that choice. After iteration i the accumulator equals C(m−1+i,i), by the binomial multiplicative recurrence, so the final value is C(m+n−2,n−1). Each division is exact. These partial coefficients do not exceed the final answer, and multiplying by at most 198 fits int64 under the contract.

## Complexity

Time: O(min(m,n)) arithmetic operations. Auxiliary space and output: O(1). The fixed numeric bounds make int64 arithmetic sufficient.

## Edge cases

One row or column has exactly one path. Swapping dimensions uses symmetry to minimize the number of iterations. Intermediate multiplication precedes division without floating-point rounding.
