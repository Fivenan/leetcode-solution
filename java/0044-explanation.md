# 44. Wildcard Matching

[Official problem](https://leetcode.com/problems/wildcard-matching/)

## Problem

Match the whole string against a pattern where ? matches one character and * matches any sequence including empty. Other characters are lowercase letters.

## Example input/output

s = "adceb", p = "*a*b" → true

## Approach

Use rolling dynamic programming over pattern prefixes. For star, combine matching zero characters with matching one more character; other atoms extend a diagonal match.

## Correctness

For star, every matching suffix is empty or contains a final consumed character, giving the left/current-row and same-column/previous-row branches. A literal or ? consumes exactly one character. These exhaustive cases establish each prefix result.

## Complexity

O((m+1)(n+1)) time; O(n) auxiliary space for pattern length n; O(1) output.

## Edge cases

Empty strings, repeated stars, a terminal star, and a near-match that fails at the end.
