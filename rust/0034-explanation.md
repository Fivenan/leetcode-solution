# 34. Find First and Last Position of Element in Sorted Array

[Official LeetCode problem](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

## Problem

Return the first and last indices of target in a sorted array in O(log n) time, or [-1,-1] if absent.

## Example input/output

[5,7,7,8,8,10], target 8 → [3,4].

## Approach

Run lower-bound and upper-bound binary searches, respectively finding the first value ≥ target and the first value > target.

## Correctness

The lower bound excludes every smaller value, and the upper bound excludes every larger position beyond target’s run. If target exists, its complete contiguous run is exactly [lower, upper−1].

## Complexity

O(log n) time and O(1) auxiliary space; a two-element output.

## Edge cases

Empty arrays, all-target arrays, and targets outside the value range work without target+1 overflow.
