# 14. Longest Common Prefix

[Official problem](https://leetcode.com/problems/longest-common-prefix/)

## Problem

Return the longest prefix shared by every string in a nonempty array of lowercase English strings; individual strings may be empty.

## Example input/output

strs = ["flower","flow","flight"] → "fl"

## Approach

Compare each position of the first string against every other string; return immediately at the first missing or different character.

## Correctness

Every position before the first mismatch is shared by all strings. The mismatch makes every longer prefix invalid, so the returned prefix is longest.

## Complexity

O(nL) worst-case time for n strings and shortest length L (plus one failing comparison); O(1) auxiliary space; O(L) output.

## Edge cases

An empty string, no common first character, one string, and identical strings.
