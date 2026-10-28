# 28. Find the Index of the First Occurrence in a String

[Official problem](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

## Problem

Return the first starting index where needle occurs in haystack, or -1 if absent. Judge inputs are nonempty lowercase strings; this implementation also accepts an empty needle.

## Example input/output

haystack = "sadbutsad", needle = "sad" → 0

## Approach

Build the KMP longest-prefix/suffix table for needle. During scanning, fall back through that table on mismatch instead of rereading text.

## Correctness

The matched prefix is always the longest pattern prefix matching a suffix of text seen so far. A mismatch can preserve only a border of that prefix, which the table enumerates. The first full match therefore has the earliest ending and starting index.

## Complexity

O(n+m) time; O(m) auxiliary space; O(1) output.

## Edge cases

Overlapping matches, a longer needle, repeated prefixes, and no occurrence.
