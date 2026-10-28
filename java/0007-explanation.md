# 7. Reverse Integer

[Official problem](https://leetcode.com/problems/reverse-integer/)

## Problem

Reverse the decimal digits of a signed 32-bit integer. Return zero if the reversed value is outside the signed 32-bit range; do not use a wider integer type.

## Example input/output

x = -123 → -321

## Approach

Extract signed last digits with remainder and append them. Before multiplying by ten, check the exact positive and negative overflow boundaries.

## Correctness

After each iteration the accumulator contains the reversed digits already removed. The boundary checks reject precisely the steps that would leave the int range.

## Complexity

O(d) time for d decimal digits; O(1) auxiliary space and output.

## Edge cases

Zero, trailing zeros, Integer.MIN_VALUE, and positive or negative overflow.
