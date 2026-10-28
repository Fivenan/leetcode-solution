# 44. Wildcard Matching

[LeetCode problem](https://leetcode.com/problems/wildcard-matching/)

## Problem

Match the entire lowercase string against a pattern where question mark matches any one character and star matches any sequence, including empty. Unlike regular expressions, star is a standalone wildcard.

## Example

s="adceb", p="*a*b" → true

## Approach

Use rolling prefix DP. Star either matches no character (current row’s preceding column) or consumes one more character (previous row’s same column).

## Correctness

The star cases exhaust its empty and nonempty matches. Normal tokens require a matching last character and a valid preceding-prefix match. Empty initialization handles leading stars, establishing the recurrence by induction.

## Complexity

Time: O(mn). Auxiliary space: O(n), with n pattern length. Output: O(1).

## Edge cases

Empty inputs, consecutive stars, question marks and patterns matching only a prefix are handled.
