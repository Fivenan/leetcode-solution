# 57. Insert Interval

[Official problem](https://leetcode.com/problems/insert-interval/)

## Problem

Insert one closed interval into an already sorted, nonoverlapping interval list, merging overlaps and preserving sorted disjoint output. The original list may be empty.

## Example input/output

intervals = [[1,3],[6,9]], newInterval = [2,5] → [[1,5],[6,9]]

## Approach

Copy intervals strictly before the new interval, absorb every interval whose start is at most its growing end, then copy the remaining suffix.

## Correctness

The first group cannot overlap because its ends are smaller than the new start. Every absorbed interval intersects the growing union. The first later start beyond that union and all following starts cannot intersect it.

## Complexity

O(n) time; O(n) auxiliary output-building reference list, plus O(n) newly allocated output intervals and outer array. Scalar bookkeeping is O(1).

## Edge cases

Empty input, insertion at either end, complete containment, and touching endpoints.
