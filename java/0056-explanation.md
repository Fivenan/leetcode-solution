# 56. Merge Intervals

[Official problem](https://leetcode.com/problems/merge-intervals/)

## Problem

Merge overlapping closed intervals and return disjoint intervals covering the same points. Touching endpoints overlap; input contains at least one interval.

## Example input/output

intervals = [[1,3],[2,6],[8,10],[15,18]] → [[1,6],[8,10],[15,18]]

## Approach

Sort intervals by start. Extend the current result interval on overlap, otherwise append a new copied interval.

## Correctness

Once the next start exceeds the current end, every later start is also larger and cannot merge with that interval. Overlapping intervals have union bounded by the minimum start and maximum end, exactly the maintained result.

## Complexity

O(n log n) time; O(n) sorting auxiliary space for Java object-array sort; O(n) output. The outer input order changes, but endpoint arrays are copied.

## Edge cases

Nested intervals, equal starts, and shared endpoints.
