# 3. Longest Substring Without Repeating Characters

[LeetCode problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Problem

Return the length of the longest contiguous substring with no repeated character. LeetCode supplies English letters, digits, symbols and spaces, so byte indexing matches its character contract.

## Example

s = "abcabcbb" → 3

## Approach

Keep a sliding window and the last index of each byte. Move the left boundary past a duplicate only when that duplicate lies inside the current window.

## Correctness

The window remains duplicate-free. For each right endpoint its left boundary is the earliest feasible one, so its length is the longest valid substring ending there.

## Complexity

Time: O(n). Auxiliary space: O(min(n,Σ)) for alphabet size Σ. Output: O(1).

## Edge cases

Empty input returns zero; repeated characters and duplicates before the active window are handled. For arbitrary Unicode, use runes and define the desired character semantics.
