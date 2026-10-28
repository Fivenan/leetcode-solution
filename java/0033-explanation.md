# 33. Search in Rotated Sorted Array

[Official problem](https://leetcode.com/problems/search-in-rotated-sorted-array/)

## Problem

Return the index of target in an ascending array of distinct integers rotated at an unknown pivot, or -1 when absent. Use logarithmic time.

## Example input/output

nums = [4,5,6,7,0,1,2], target = 0 → 4

## Approach

Binary search; one side of the midpoint is sorted. Check whether target lies in that sorted range to choose the remaining half.

## Correctness

Distinct values ensure at least one half is sorted. Its endpoint inequalities exactly determine whether target can belong there, so each discarded half cannot contain target.

## Complexity

O(log n) time; O(1) auxiliary space and output.

## Edge cases

No rotation, one element, target at the pivot, and an absent target.
