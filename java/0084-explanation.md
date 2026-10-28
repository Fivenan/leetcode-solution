# 84. Largest Rectangle in Histogram

[Official problem](https://leetcode.com/problems/largest-rectangle-in-histogram/)

## Problem

Given nonnegative unit-width histogram bars, return the area of its largest axis-aligned rectangle. Judge bounds keep the area in int range.

## Example input/output

heights = [2,1,5,6,2,3] → 10

## Approach

Maintain a stack of indices with nondecreasing heights. On a shorter bar, pop taller bars and compute their widest rectangle using the new stack top as left boundary. A zero sentinel flushes the stack.

## Correctness

A popped bar first encounters a smaller height on its right; the previous stack index bounds a no-taller separator on its left. Its computed span is the widest available at that height for that representative. Every maximal rectangle has a limiting bar handled by a pop, including equal-height runs.

## Complexity

O(n) time, since each index is pushed/popped once; O(n) auxiliary stack space; O(1) output.

## Edge cases

Increasing/decreasing bars, equal heights, zero bars, and a single bar.
