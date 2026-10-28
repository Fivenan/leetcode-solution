# 69. Sqrt(x)

[LeetCode problem](https://leetcode.com/problems/sqrtx/)

## Problem

For a nonnegative signed 32-bit integer x, return floor(sqrt(x)) without a built-in exponent or square-root operation.

## Example

x=8 → 2

## Approach

Binary-search the largest integer mid satisfying mid≤x/mid. Division avoids overflow from mid×mid.

## Correctness

The predicate is true exactly for nonnegative candidates whose square is at most x and is monotone. The final hi is the greatest candidate satisfying it, which is the floor square root.

## Complexity

Time: O(log(x+1)). Auxiliary space and output: O(1).

## Edge cases

Zero and one return directly. Perfect squares, values just below squares and the maximum 32-bit input are supported.
