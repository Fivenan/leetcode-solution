# 65. Valid Number

[Official LeetCode problem](https://leetcode.com/problems/valid-number/)

## Problem

Recognize a valid decimal number with optional leading sign, optional decimal point, and optional e/E exponent containing an optionally signed integer. A mantissa must contain at least one digit.

## Example input/output

"-90E3" → true; "99e2.5" → false; ".1" → true.

## Approach

Scan once, recording whether a digit, point, and exponent have occurred. Permit a sign only at the start or immediately after an exponent, and require new digits after the exponent.

## Correctness

Each rejection violates one grammar restriction. Otherwise the pre-exponent section has at most one point and at least one digit, and the exponent has only an optional initial sign and at least one digit. These are exactly the allowed number forms.

## Complexity

O(n) time and O(1) auxiliary/output space.

## Edge cases

Sign-only strings, a bare point, repeated exponents, missing exponent digits, and invalid characters are rejected. Whitespace is not part of the stated grammar.
