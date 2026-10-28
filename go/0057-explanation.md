# 57. Insert Interval

[LeetCode problem](https://leetcode.com/problems/insert-interval/)

## Problem

Insert a closed interval into a list already sorted by start with no overlapping intervals, merging any overlaps and preserving sorted disjoint output.

## Example

[[1,3],[6,9]], new=[2,5] → [[1,5],[6,9]]

## Approach

Append intervals strictly before the new one. Merge all intervals whose starts overlap the expanding new interval, append that merged interval, then append the untouched suffix.

## Correctness

Sorted disjoint input splits into a before portion, one contiguous overlapping portion, and an after portion. Their processing preserves the union and leaves exactly one replacement for the overlapping portion.

## Complexity

Time: O(n). Auxiliary space: O(1), excluding O(n) output slice references and the new merged endpoint pair. Untouched endpoint slices are shared with input.

## Edge cases

Empty input, insertion at either end, touching endpoints and an interval covering the whole list work.
