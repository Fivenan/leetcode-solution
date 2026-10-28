# 97. Interleaving String

[Official problem](https://leetcode.com/problems/interleaving-string/)

## Problem

Decide whether s3 interleaves s1 and s2 while preserving each source’s character order and consuming every character. Strings contain lowercase letters and may be empty.

## Example input/output

s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac" → true

## Approach

Reject unequal total length. Use rolling DP where state (i,j) matches the first i+j target characters using prefixes of lengths i and j.

## Correctness

The final interleaved character comes from either source’s final consumed character. Matching that character and a valid predecessor is necessary and sufficient, so the recurrence exactly characterizes all interleavings.

## Complexity

O((m+1)(n+1)) time; O(min(m,n)) auxiliary space; O(1) output.

## Edge cases

Empty sources, unequal lengths, repeated letters creating ambiguous choices, and near-matches.
