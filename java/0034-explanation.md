# 34. Find First and Last Position of Element in Sorted Array

[Official problem](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

## Problem

In a nondecreasing integer array, return the first and last target indices, or [-1,-1] if absent. Require logarithmic time.

## Example input/output

nums = [5,7,7,8,8,10], target = 8 → [3,4]

## Approach

Binary search the first index at least target and the first index greater than target. Their interval contains all occurrences.

## Correctness

Each boundary search maintains all candidate boundary positions in its half-open interval. Sortedness makes the qualifying predicate monotone, and the converged boundaries bracket precisely the target run.

## Complexity

O(log(n+1)) time; O(1) auxiliary space and output.

## Edge cases

Empty input, all equal elements, absent targets, and target Integer.MAX_VALUE (no target+1 arithmetic).
