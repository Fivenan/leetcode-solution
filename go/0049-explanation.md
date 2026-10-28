# 49. Group Anagrams

[LeetCode problem](https://leetcode.com/problems/group-anagrams/)

## Problem

Group lowercase English strings so two strings belong to the same group exactly when they are anagrams. Group order and member order are unrestricted.

## Example

["eat","tea","tan","ate","nat","bat"] → [["eat","tea","ate"],["tan","nat"],["bat"]]

## Approach

Use a fixed 26-count array as each string’s map key. Record the output group index for every key, preserving first-seen group order.

## Correctness

Two lowercase strings have identical character multisets exactly when their 26 frequency counts agree. Thus equal keys group precisely the anagrams.

## Complexity

Time: expected O(total characters + 26k) for k strings. Auxiliary space: O(26g) map entries for g groups, excluding O(k+g) output slice references. String contents are reused.

## Edge cases

Empty strings share the all-zero key. Duplicate strings stay as separate input occurrences; only lowercase a..z is assumed.
