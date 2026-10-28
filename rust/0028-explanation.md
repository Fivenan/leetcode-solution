# 28. Find the Index of the First Occurrence in a String

[Official LeetCode problem](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

## Problem

Return the first index at which lowercase string needle occurs in haystack, or −1 if absent.

## Example input/output

"sadbutsad", "sad" → 0; "leetcode", "leeto" → -1.

## Approach

Use Knuth–Morris–Pratt: build longest-proper-prefix/suffix lengths for needle, then reuse those lengths after mismatches while scanning haystack.

## Correctness

matched is the longest needle prefix equal to a suffix of text processed so far. A mismatch can retain only a border of that prefix; following pi visits exactly those possibilities. Reaching the full length therefore identifies the first occurrence without skipping a possible start.

## Complexity

O(h+n) time and O(n) auxiliary prefix-table space; O(1) output.

## Edge cases

Repeated prefixes, a match at the end, longer needles, and even an empty needle are handled. ASCII indices match the judge’s character indices.
