# 81. Search in Rotated Sorted Array II

[LeetCode problem](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)

## Problem

Determine whether target exists in a nondecreasing array rotated at an unknown pivot. Duplicate values are allowed.

## Example

[2,5,6,0,0,1,2], target=0 → true

## Approach

Use rotated binary search when a sorted half can be identified. When both endpoints equal the midpoint, discard both endpoints to remove the ambiguity.

## Correctness

If all three compared values agree and are not target, dropping the endpoints cannot lose a target. Otherwise the sorted half’s bounds determine which half can contain target, preserving any possible occurrence.

## Complexity

Time: O(n) worst case due to duplicates; O(log n) when ambiguity does not persist. Auxiliary space and output: O(1).

## Edge cases

All equal values, absent targets, a one-element array and a pivot hidden among duplicates are handled.
