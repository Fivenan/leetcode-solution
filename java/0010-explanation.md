# 10. Regular Expression Matching

[Official problem](https://leetcode.com/problems/regular-expression-matching/)

## Problem

Match the entire string against a valid pattern containing lowercase letters, dot (any character), and star (zero or more copies of the preceding atom). A star always has a valid preceding atom.

## Example input/output

s = "aab", p = "c*a*b" → true

## Approach

Dynamic programming tracks matches between string prefixes and pattern prefixes. A star either removes its atom entirely or consumes one matching character while retaining the star. Store only the current rolling row, preserving the old diagonal before each update.

## Correctness

For a normal atom, the final characters must match and both preceding prefixes must match. For a starred atom, every match uses zero occurrences or at least one, exactly the two recurrence branches.

## Complexity

O((m+1)(n+1)) time; O(n) auxiliary space for pattern length n; O(1) output.

## Edge cases

Empty strings/patterns, zero repetitions, dot-star, and cases where a prefix matches but the whole string does not.
