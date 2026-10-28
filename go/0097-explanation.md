# 97. Interleaving String

[LeetCode problem](https://leetcode.com/problems/interleaving-string/)

## Problem

Decide whether s3 can be formed by interleaving s1 and s2 while preserving the relative order of each source string’s characters. Empty strings are allowed.

## Example

s1="aabcc", s2="dbbca", s3="aadbbcbcac" → true

## Approach

Reject unequal total length. Roll prefix DP over the shorter source; each target character may come from the next matching character of either source.

## Correctness

The final character of any interleaving must be the final used character of s1 or s2. The two transitions test precisely those possibilities and their valid preceding prefixes; initialization handles a source contributing nothing.

## Complexity

Time: O(mn). Auxiliary space: O(min(m,n)). Output: O(1).

## Edge cases

All-empty strings, one empty source, repeated ambiguous letters and matching character counts with invalid ordering are handled.
