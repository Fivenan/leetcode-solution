# 44. Wildcard Matching

[Official LeetCode problem](https://leetcode.com/problems/wildcard-matching/)

## Problem

Match an entire lowercase string against a wildcard pattern where ? matches one character and * matches any sequence, including empty.

## Example input/output

"adceb" with "*a*b" → true; "acdcb" with "a*c?b" → false.

## Approach

Use one rolling prefix-DP row. For *, combine skipping it with consuming another text character; otherwise extend the previous diagonal match.

## Correctness

For a nonstar token, a match requires the preceding prefixes and one compatible final character. A star either matches nothing or absorbs the final character while matching the same pattern prefix. These exhaustive cases establish every DP state by induction.

## Complexity

O((m+1)(n+1)) time and O(n+1) auxiliary space for text length m and pattern length n; O(1) output. For nonempty inputs these simplify to O(mn) time and O(n) space.

## Edge cases

Empty text, all-star patterns, consecutive stars, and literals surrounding wildcards are supported.
