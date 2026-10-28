# 97. Interleaving String

[Official LeetCode problem](https://leetcode.com/problems/interleaving-string/)

## Problem

Decide whether s3 can be formed by interleaving all characters of s1 and s2 while preserving the order within each source. Inputs are lowercase English strings.

## Example input/output

"aabcc", "dbbca", "aadbbcbcac" → true; "aadbbbaccc" → false.

## Approach

Use one-row prefix DP: the next target character must come from the end of the current s1 prefix or the current s2 prefix, with a valid interleaving before it.

## Correctness

Those are exactly the two possible origins of a target prefix’s final character. Matching that character and a valid predecessor state is necessary and sufficient; initializing boundary prefixes and applying the recurrence proves the final result.

## Complexity

O((m+1)(n+1)) time and O(min(m,n)+1) auxiliary space; O(1) output. For nonempty sources the time is O(mn). Swapping source ownership avoids unnecessary buffers.

## Edge cases

Empty sources, empty target, duplicate letters requiring alternative choices, and mismatched total lengths are handled.
