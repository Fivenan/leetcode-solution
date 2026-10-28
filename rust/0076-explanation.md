# 76. Minimum Window Substring

[Official LeetCode problem](https://leetcode.com/problems/minimum-window-substring/)

## Problem

Return the shortest substring of s containing every character of t with its multiplicity. Inputs contain uppercase and lowercase English letters; the answer is unique when it exists.

## Example input/output

"ADOBECODEBANC", "ABC" → "BANC".

## Approach

Maintain character deficits and a missing-character count while expanding right. Once the window covers t, repeatedly shrink left, recording the shortest valid span.

## Correctness

missing is zero exactly when all required multiplicities are met. For each right endpoint, shrinking visits all valid left boundaries until the next removal would break coverage, including its shortest valid suffix. The minimum across all endpoints is therefore globally shortest.

## Complexity

O(|s|+|t|) time, O(1) auxiliary space (128 counters), and O(answer length) output space.

## Edge cases

Repeated required characters, no solution, t longer than s, and empty t are handled. ASCII makes direct counters and string slicing valid.
