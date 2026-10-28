# 14. Longest Common Prefix

[LeetCode problem](https://leetcode.com/problems/longest-common-prefix/)

## Problem

Return the longest prefix shared by every string in a nonempty array of lowercase English strings. Individual strings may be empty.

## Example

["flower","flow","flight"] → "fl"

## Approach

Compare each position of the first string against every other string, stopping at the first missing or different character.

## Correctness

All positions before the stopping point agree in every string. The first differing or absent position cannot belong to any common prefix, proving maximality.

## Complexity

Time: O(total characters inspected), at most O(k·L) for k strings and first-string length L. Auxiliary space: O(1); output is a substring.

## Edge cases

An empty member or disjoint initial letters returns empty. One member returns itself. An empty array is also tolerated.
