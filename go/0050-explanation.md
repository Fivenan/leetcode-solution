# 50. Pow(x, n)

[LeetCode problem](https://leetcode.com/problems/powx-n/)

## Problem

Compute x raised to signed 32-bit exponent n. Inputs avoid undefined zero to a nonpositive exponent and the expected result lies within the stated numeric range.

## Example

x=2, n=-2 → 0.25

## Approach

For a negative exponent invert x and negate an int64 copy of n. Use exponentiation by squaring, multiplying the result for each set exponent bit.

## Correctness

The invariant result × base^remaining equals the desired power. Consuming an odd bit multiplies one base into result; squaring the base and halving the exponent preserves the remainder.

## Complexity

Time: O(log(|n|+1)). Auxiliary space and output: O(1). Floating-point rounding follows normal float64 arithmetic.

## Edge cases

n=0 returns one. Widening before negation handles -2147483648. Negative bases and negative exponents are supported.
