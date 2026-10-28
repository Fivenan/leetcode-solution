# 80. Remove Duplicates from Sorted Array II

[Official LeetCode problem](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)

## Problem

Compact a sorted integer array in place so each distinct value appears at most twice in the returned prefix, and return its length.

## Example input/output

[1,1,1,2,2,3] → k=5, prefix [1,1,2,2,3].

## Approach

Write each value unless it equals the value two retained positions earlier.

## Correctness

Sorted order makes equal values contiguous. Equality two slots back means two copies are already retained; inequality means fewer than two exist at the current end, so keeping the value is necessary. This preserves exactly two or fewer copies of every processed value.

## Complexity

O(n) time and O(1) auxiliary/output space; suffix values and vector length are unspecified after the returned prefix.

## Edge cases

Short, empty, all-equal, and already-valid arrays work.
