# 69. Sqrt(x)

[Official LeetCode problem](https://leetcode.com/problems/sqrtx/)

## Problem

Return floor(sqrt(x)) for a nonnegative signed 32-bit integer without power or root library functions.

## Example input/output

8 → 2; 4 → 2.

## Approach

Binary search the largest positive integer mid satisfying mid ≤ x/mid.

## Correctness

For positive mid the division predicate is equivalent to mid²≤x and is monotone. Recording passing candidates and discarding the appropriate half leaves the largest passing value when the search ends.

## Complexity

O(log(x+1)) time and O(1) auxiliary/output space.

## Edge cases

Zero and one return directly. Division avoids overflowing mid² near i32::MAX.
