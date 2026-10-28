# 8. String to Integer (atoi)

[Official LeetCode problem](https://leetcode.com/problems/string-to-integer-atoi/)

## Problem

Parse leading spaces, one optional sign, and the following decimal digit run. Stop at the first other character and clamp to signed 32-bit bounds.

## Example input/output

"   -42" → -42; "4193 with words" → 4193.

## Approach

Scan the permitted prefix, accumulating an i64 magnitude and returning the appropriate bound as soon as it is reached.

## Correctness

Each consumed digit extends the parsed magnitude by decimal place value. Once the sign-specific limit is reached, all later digits leave the clamped answer unchanged; otherwise applying the sign gives the exact parsed integer.

## Complexity

O(n) time and O(1) auxiliary/output space.

## Edge cases

Empty strings, sign-only strings, leading zeroes, mixed text, and long overflowing digit sequences are supported. Only literal spaces are skipped, matching the contract.
