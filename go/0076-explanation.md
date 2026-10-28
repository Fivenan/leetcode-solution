# 76. Minimum Window Substring

[LeetCode problem](https://leetcode.com/problems/minimum-window-substring/)

## Problem

Return the shortest substring of an English-letter string s containing all characters of t with their multiplicities. Return empty if impossible. The problem guarantees a unique minimum answer.

## Example

s="ADOBECODEBANC", t="ABC" → "BANC"

## Approach

Track remaining required character counts and total missing occurrences. Expand right until all are present, then shrink left while the window stays valid, recording shorter windows.

## Correctness

The missing count is zero exactly for covering windows. Shrinking examines the shortest covering window for each right endpoint before dropping a required occurrence, so a global minimum cannot be missed.

## Complexity

Time: O(|s|+|t|), because both window boundaries move only forward. Auxiliary space: O(1), a fixed byte-frequency table. Output is a substring sharing s storage.

## Edge cases

Repeated required letters, case sensitivity, no solution and t longer than s are handled. An empty t returns empty defensively.
