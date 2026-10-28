# 10. Regular Expression Matching

[LeetCode problem](https://leetcode.com/problems/regular-expression-matching/)

## Problem

Match the entire string against a valid pattern containing lowercase letters, dot (any one character), and star (zero or more of the preceding element). Star always has a valid preceding element.

## Example

s = "aab", p = "c*a*b" → true

## Approach

Use prefix dynamic programming with rolling rows. A normal token consumes one character; a starred token either contributes zero occurrences or consumes one character while keeping the same pattern prefix.

## Correctness

These cases exhaust how a match can end. The empty-prefix initialization accounts for zero repetitions, and each transition uses already-correct shorter prefixes.

## Complexity

Time: O(mn), m=string length and n=pattern length. Auxiliary space: O(n). Output: O(1).

## Edge cases

Empty string, chains of starred elements, dot-star, and patterns matching only a prefix are handled. Malformed patterns are outside the contract.
