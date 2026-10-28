# 50. Pow(x, n)

[Official problem](https://leetcode.com/problems/powx-n/)

## Problem

Compute x raised to a signed 32-bit integer exponent n. The judge excludes undefined zero-to-nonpositive cases and constrains the result to finite magnitude.

## Example input/output

x = 2.0, n = -2 → 0.25

## Approach

Widen the exponent to long, reciprocate the base for negative powers, then square the base while consuming exponent bits.

## Correctness

The invariant result·base^remaining equals the requested power. An odd bit transfers one base factor to result, then squaring and halving preserve the invariant until remaining is zero.

## Complexity

O(log(|n|+1)) time; O(1) auxiliary space and output; normal floating-point rounding applies.

## Edge cases

Exponent zero, negative exponents, negative bases, and Integer.MIN_VALUE.
