# 56. Merge Intervals

[Official LeetCode problem](https://leetcode.com/problems/merge-intervals/)

## Problem

Merge all overlapping closed intervals and return their nonoverlapping union.

## Example input/output

[[1,3],[2,6],[8,10],[15,18]] → [[1,6],[8,10],[15,18]].

## Approach

Sort by start. Extend the last output interval when the next interval overlaps; otherwise append a new interval.

## Correctness

After sorting, only the latest output interval can overlap the next one: all earlier outputs end before its start. Extending preserves the same union, while a gap proves the last interval is final.

## Complexity

O(n log n) time, O(log n) sorting-stack auxiliary space, and O(n) output headers/endpoints. Input inner vectors are moved into output when possible, without cloning.

## Edge cases

Touching endpoints overlap because intervals are closed. Nested, equal, and empty collections are handled.
