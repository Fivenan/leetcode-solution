# 26. Remove Duplicates from Sorted Array

[Official problem](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

## Problem

Compact a nonempty nondecreasing array in place so each distinct value appears once in the first k positions. Return k; values after that prefix are irrelevant.

## Example input/output

nums = [1,1,2] → k = 2, prefix = [1,2]

## Approach

Use a write index for distinct values, copying a read value only when it differs from the last written one.

## Correctness

The prefix before write contains exactly the distinct values seen so far in sorted order. A repeated value adds nothing; a different value extends that prefix once.

## Complexity

O(n) time; O(1) auxiliary space and output.

## Edge cases

All identical values, no duplicates, and negative numbers.
