# 28. Find the Index of the First Occurrence in a String

[LeetCode problem](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

## Problem

Return the first starting index where needle occurs in haystack, or -1 when absent. The supplied strings use lowercase English letters.

## Example

haystack="sadbutsad", needle="sad" → 0

## Approach

Build the KMP prefix-function for needle. During scanning, reuse the longest proper prefix that is also a suffix whenever a mismatch occurs.

## Correctness

The matched prefix is always a suffix of the processed text. Prefix-function fallback enumerates all remaining viable suffixes without skipping a match. Returning on the first full prefix gives the earliest occurrence.

## Complexity

Time: O(n+m). Auxiliary space: O(m) for the prefix-function; output: O(1).

## Edge cases

Needle longer than haystack, overlapping repetitions and absent patterns work. Empty needle is also handled as index zero.
