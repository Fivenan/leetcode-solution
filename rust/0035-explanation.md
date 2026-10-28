# 35. Search Insert Position

[Official LeetCode problem](https://leetcode.com/problems/search-insert-position/)

## Problem

In a sorted array of distinct integers, return target’s index or the position where inserting it preserves order.

## Example input/output

[1,3,5,6], target 2 → 1.

## Approach

Use lower-bound binary search on a half-open interval.

## Correctness

All indices below l are known to hold values below target; all at or above r hold values at least target. When the interval is empty, its boundary is exactly the required insertion point.

## Complexity

O(log n) time and O(1) auxiliary/output space.

## Edge cases

Insertion before the first or after the last value, existing targets, and empty arrays work.
