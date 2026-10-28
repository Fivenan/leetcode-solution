# 76. Minimum Window Substring

[Official problem](https://leetcode.com/problems/minimum-window-substring/)

## Problem

Return the shortest substring of s containing every character of t with its multiplicity. Inputs contain uppercase/lowercase English letters, t is nonempty, and an existing shortest answer is unique; return empty if impossible.

## Example input/output

s = "ADOBECODEBANC", t = "ABC" → "BANC"

## Approach

Track needed character counts and total missing occurrences. Expand the right edge, then shrink the left edge while all requirements are met, recording each smaller valid window.

## Correctness

The missing count is zero exactly when the window covers every required occurrence. For each right endpoint, shrinking visits its smallest valid left boundary before losing coverage, so a global shortest window is considered.

## Complexity

O(|s|+|t|) time; O(128) fixed ASCII count space; O(k) returned substring.

## Edge cases

Repeated required letters, t longer than s, no match, and case sensitivity.
