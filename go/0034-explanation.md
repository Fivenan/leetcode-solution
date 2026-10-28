# 34. Find First and Last Position of Element in Sorted Array

[LeetCode problem](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

## Problem

Return the first and last positions of target in a sorted integer array, or [-1,-1] if absent, in O(log n) time.

## Example

[5,7,7,8,8,10], target=8 → [3,4]

## Approach

Binary-search the first value ≥ target and the first value > target. The interval between these bounds contains every occurrence.

## Correctness

The lower-bound predicate separates values below target from possible matches; the upper-bound predicate separates matches from larger values. Sorted order places all equal values in the resulting contiguous interval.

## Complexity

Time: O(log(n+1)). Auxiliary space: O(1). Output: two integers.

## Edge cases

Empty arrays, absent values, all equal values and occurrences at either end work without target+1 arithmetic.
