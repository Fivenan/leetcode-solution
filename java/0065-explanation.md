# 65. Valid Number

[Official problem](https://leetcode.com/problems/valid-number/)

## Problem

Decide whether the entire string is a valid decimal number: optional sign, an integer or decimal mantissa with at least one digit, and optional e/E followed by a signed integer exponent with digits. No spaces are allowed by this contract.

## Example input/output

s = "-90E3" → true; s = "99e2.5" → false

## Approach

Scan once with flags for a digit, decimal point, and exponent. Restrict signs to the beginning or immediately after e/E, and reset the digit requirement at the exponent.

## Correctness

Each character is accepted exactly where the numeric grammar allows it. The digit flag ensures both a nonempty mantissa and, after any exponent, a nonempty exponent; point/exponent flags enforce their order and uniqueness.

## Complexity

O(n) time; O(1) auxiliary space and output.

## Edge cases

Leading/trailing decimal point with a digit, sign-only strings, exponent without digits, and repeated signs or points.
