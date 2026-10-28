# 80. Remove Duplicates from Sorted Array II

[LeetCode problem](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)

## Problem

Compact a sorted array in place so each distinct value appears at most twice. Return the retained length k; only nums[:k] is meaningful.

## Example

[0,0,1,1,1,1,2,3,3] → k=7, prefix [0,0,1,1,2,3,3]

## Approach

Copy a value unless it equals the retained value two positions behind the write index.

## Correctness

Because equal values are contiguous, equality with the value two places back means two copies are already retained. Otherwise keeping it cannot exceed two copies, maintaining the correct compacted prefix.

## Complexity

Time: O(n). Auxiliary space: O(1). Output is the input prefix.

## Edge cases

Inputs shorter than two, all equal values, negative values and no duplicates work. The unused suffix has no contract.
