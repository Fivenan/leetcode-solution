# 56. Merge Intervals

[LeetCode problem](https://leetcode.com/problems/merge-intervals/)

## Problem

Merge overlapping closed intervals and return their union as disjoint intervals. Endpoints that touch count as overlapping.

## Example

[[1,3],[2,6],[8,10],[15,18]] → [[1,6],[8,10],[15,18]]

## Approach

Sort by start point. Extend the last output interval if the next start is no greater than its end; otherwise append a new interval.

## Correctness

Sorted starts ensure a new interval can overlap only the last output interval. Extending it preserves the exact union, while a larger start proves a permanent gap.

## Complexity

Time: O(n log n). Auxiliary space: O(log n) sorting stack, excluding O(n) output. Input interval order changes; returned endpoint slices are new.

## Edge cases

Nested intervals, equal endpoints, touching intervals and a single interval work. Empty input is tolerated.
