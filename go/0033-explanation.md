# 33. Search in Rotated Sorted Array

[LeetCode problem](https://leetcode.com/problems/search-in-rotated-sorted-array/)

## Problem

Search a strictly increasing array rotated at an unknown pivot. Return target’s index or -1, using O(log n) time. Values are distinct.

## Example

[4,5,6,7,0,1,2], target=0 → 4

## Approach

At each midpoint identify the sorted half, then retain it only when target lies within its bounds; otherwise retain the other half.

## Correctness

At least one half is sorted. Its bounds precisely determine whether target can lie inside it, so the discarded half cannot contain an existing target. Each step halves the search interval.

## Complexity

Time: O(log n). Auxiliary space and output: O(1).

## Edge cases

Unrotated arrays, one element, absent targets and a pivot next to an endpoint work. Distinctness is essential for the logarithmic decision.
