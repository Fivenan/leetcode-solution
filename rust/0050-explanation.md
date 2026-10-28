# 50. Pow(x, n)

[Official LeetCode problem](https://leetcode.com/problems/powx-n/)

## Problem

Compute x raised to signed 32-bit exponent n. Inputs follow the judge’s floating-point domain restrictions, including nonzero x for negative exponents.

## Example input/output

2.0^-2 → 0.25; 2.0^10 → 1024.0.

## Approach

For a negative exponent, invert x and negate the exponent in i64. Then use binary exponentiation, multiplying the answer for set bits and squaring the base each step.

## Correctness

The invariant answer·base^remaining equals the desired power. An odd bit transfers one base factor to answer; squaring and halving preserve the remaining power. At zero remaining exponent, answer is the result up to floating-point rounding.

## Complexity

O(log(|n|+1)) time and O(1) auxiliary/output space.

## Edge cases

n=0 returns 1; i32::MIN is safely negated after widening. Floating-point overflow, underflow, and rounding follow f64 arithmetic.
