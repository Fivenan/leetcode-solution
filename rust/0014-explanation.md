# 14. Longest Common Prefix

[Official LeetCode problem](https://leetcode.com/problems/longest-common-prefix/)

## Problem

Return the longest common prefix of lowercase English strings, or the empty string if none exists.

## Example input/output

["flower","flow","flight"] → "fl".

## Approach

Keep a candidate prefix length in the first string and shorten it at the first mismatch with each remaining string.

## Correctness

After each comparison the candidate is exactly the longest prefix shared by all processed strings: no excluded character matched the current string, while all retained characters match. The final candidate therefore satisfies all strings.

## Complexity

O(S) time for total examined characters, O(1) auxiliary state, and O(L) output for prefix length L.

## Edge cases

An empty string forces an empty prefix; one string returns itself. Byte slicing follows the lowercase ASCII contract.
