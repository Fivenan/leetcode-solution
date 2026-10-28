# 8. String to Integer (atoi)

[Official problem](https://leetcode.com/problems/string-to-integer-atoi/)

## Problem

Parse optional leading ASCII spaces, an optional sign, and consecutive decimal digits; stop at the first nondigit. Return zero without digits and clamp overflow to signed 32-bit bounds.

## Example input/output

s = "   -42" → -42

## Approach

Skip spaces and sign, then accumulate digits only while within the sign-specific magnitude limit. Return the appropriate clamp as soon as the next digit would exceed it.

## Correctness

The accumulator equals the parsed digit prefix. Comparing against (limit-digit)/10 detects overflow before it occurs; later digits cannot bring an overflowing magnitude back into range.

## Complexity

O(n) time; O(1) auxiliary space and output.

## Edge cases

Whitespace only, sign without digits, mixed suffix, and the asymmetric minimum integer magnitude.
