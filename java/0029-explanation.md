# 29. Divide Two Integers

[Official problem](https://leetcode.com/problems/divide-two-integers/)

## Problem

Divide signed 32-bit dividend by nonzero divisor, truncating toward zero, without multiplication, division, or remainder. Clamp the sole positive overflow to Integer.MAX_VALUE.

## Example input/output

dividend = 10, divisor = 3 → 3

## Approach

Use positive long magnitudes and subtract shifted divisor multiples from bit 31 downward, setting quotient bits. Apply the sign at the end.

## Correctness

Before each bit, larger quotient multiples have been removed. Subtracting a fitting shifted divisor sets exactly that quotient bit and leaves a smaller remainder; after all bits the remainder is below the divisor.

## Complexity

O(32) time; O(1) auxiliary space and output.

## Edge cases

Minimum dividend, divisor -1, unequal signs, and quotient zero. long is used only for magnitude and shifts.
