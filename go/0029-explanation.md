# 29. Divide Two Integers

[LeetCode problem](https://leetcode.com/problems/divide-two-integers/)

## Problem

Divide two signed 32-bit integers without multiplication, division or modulus. Truncate toward zero and clamp overflow to the 32-bit range. Divisor is nonzero.

## Example

10 / 3 → 3; 7 / -3 → -2

## Approach

Widen magnitudes to int64, then subtract shifted divisor multiples from highest bit to lowest, setting quotient bits. Apply the sign afterward.

## Correctness

At each bit, the shifted divisor fits exactly when that quotient bit can be set. Subtraction leaves the residual dividend for smaller bits, producing the integer quotient; sign application gives truncation toward zero.

## Complexity

Time: O(32), fixed by the 32-bit contract. Auxiliary space and output: O(1).

## Edge cases

Minimum integer divided by -1 is the only positive overflow. Zero dividend, minimum negative values and divisor ±1 are supported; widening precedes negation.
