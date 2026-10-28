# 8. String to Integer (atoi)

[LeetCode problem](https://leetcode.com/problems/string-to-integer-atoi/)

## Problem

Skip leading spaces, consume an optional sign and subsequent decimal digits, stop at the first nondigit, and clamp the result to the signed 32-bit range. No consumed digits means zero.

## Example

"   -42" → -42; "4193 with words" → 4193

## Approach

Parse left to right, maintaining the sign and an unsigned magnitude in int. Compare against the appropriate magnitude limit before appending each digit.

## Correctness

The accumulator equals the consumed digit prefix. Once appending a digit would exceed the limit, further digits cannot reduce it, so clamping immediately is correct.

## Complexity

Time: O(n). Auxiliary space and output: O(1). Assumes the LeetCode Go 64-bit int environment for the magnitude 2147483648.

## Edge cases

No digits, signs without digits, leading zeros, trailing text and both overflow directions are covered. Only the contract’s space character is skipped.
