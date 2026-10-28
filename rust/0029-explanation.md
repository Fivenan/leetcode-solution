# 29. Divide Two Integers

[Official LeetCode problem](https://leetcode.com/problems/divide-two-integers/)

## Problem

Divide two signed 32-bit integers without multiplication, division, or remainder operators. Truncate toward zero and clamp overflow; divisor is nonzero.

## Example input/output

10 / 3 → 3; 7 / -3 → -2.

## Approach

Convert magnitudes to i64 and greedily subtract shifted divisor multiples from the highest quotient bit down, then restore the sign.

## Correctness

At each bit, subtracting a fitting shifted divisor fixes that quotient bit and leaves a smaller nonnegative remainder. After the last bit, the remainder is below the divisor, so the magnitude is the floor quotient; applying the sign truncates toward zero.

## Complexity

O(32) time and O(1) auxiliary/output space.

## Edge cases

i32::MIN, divisor ±1, zero dividend, and the sole overflowing quotient are safe in i64. Shifts stay below i64 capacity.
