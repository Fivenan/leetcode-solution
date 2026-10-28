# 74. Search a 2D Matrix

[Official LeetCode problem](https://leetcode.com/problems/search-a-2d-matrix/)

## Problem

Search a rectangular matrix whose rows are increasing and whose first value in each row exceeds the previous row’s final value.

## Example input/output

[[1,3,5,7],[10,11,16,20],[23,30,34,60]], target 3 → true.

## Approach

Treat row-major positions as one sorted virtual array and run lower-bound binary search, mapping indices through division and remainder.

## Correctness

The matrix ordering contract makes the virtual array globally sorted. Lower-bound invariants find the first value at least target; equality there is necessary and sufficient for membership.

## Complexity

O(log(rows·cols)) time and O(1) auxiliary/output space; no flattened copy is allocated.

## Edge cases

Targets at boundaries or between rows, absent targets, and empty dimensions are handled.
