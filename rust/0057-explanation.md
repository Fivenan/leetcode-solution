# 57. Insert Interval

[Official LeetCode problem](https://leetcode.com/problems/insert-interval/)

## Problem

Insert one closed interval into a sorted nonoverlapping interval list, merging any overlaps.

## Example input/output

[[1,3],[6,9]] with [2,5] → [[1,5],[6,9]].

## Approach

Emit intervals wholly before the insertion, grow the pending interval across overlaps, and emit it once before the first later interval.

## Correctness

Sorted disjoint input divides into an earlier prefix, one consecutive overlap block, and a later suffix. The running pending interval is exactly the union of the new interval and processed overlaps, so placing it between the untouched prefix and suffix preserves the full union.

## Complexity

O(n) time and O(1) auxiliary state besides O(n) output headers/endpoints. Owned interval vectors move rather than clone.

## Edge cases

Empty input, insertion before or after all intervals, containing intervals, and touching endpoints work.
