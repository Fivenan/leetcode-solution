# 26. Remove Duplicates from Sorted Array

[Official LeetCode problem](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

## Problem

Compact a sorted array in place so its first k positions contain every distinct value exactly once; return k. Positions after k are unspecified.

## Example input/output

[1,1,2] → k=2, prefix [1,2].

## Approach

Maintain a write index and copy a value only if it differs from the last retained value.

## Correctness

After each read, the retained prefix is exactly the distinct sorted values seen so far. Equal adjacent input values need no new slot, while a new value extends that prefix once.

## Complexity

O(n) time and O(1) auxiliary/output space; the existing vector length need not change.

## Edge cases

Empty arrays, all-equal arrays, and already-distinct arrays are supported.
