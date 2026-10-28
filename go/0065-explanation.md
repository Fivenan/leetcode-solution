# 65. Valid Number

[LeetCode problem](https://leetcode.com/problems/valid-number/)

## Problem

Decide whether the whole string is a valid decimal number: optional sign, an integer or decimal significand with at least one digit, and optional e/E followed by an optionally signed integer exponent. No whitespace is permitted by the current contract.

## Example

"-90E3" → true; "99e2.5" → false

## Approach

Scan with flags for whether digits have appeared in the current component, whether a dot has appeared, and whether an exponent has begun. Permit signs only initially or immediately after e/E.

## Correctness

Each accepted character obeys the grammar’s local ordering constraints. Requiring digits before an exponent and at the end enforces the mandatory significand and exponent digits; dot/exponent flags prohibit repeated or misplaced separators.

## Complexity

Time: O(n). Auxiliary space and output: O(1).

## Edge cases

".1", "3.", signed exponents and uppercase E are valid. Lone signs/dots, exponent without digits, multiple dots and embedded spaces are rejected.
