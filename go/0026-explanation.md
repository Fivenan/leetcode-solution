# 26. Remove Duplicates from Sorted Array

[LeetCode problem](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

## Problem

Compact a sorted integer array in place so each value appears once. Return k; only nums[:k] is part of the answer.

## Example

[1,1,2] → k=2, prefix [1,2]

## Approach

Maintain a write index and copy a value only when it differs from the last retained value.

## Correctness

Sorted equal values are contiguous. The first occurrence of each new value is retained, subsequent occurrences are skipped, and the written prefix remains exactly the distinct values seen.

## Complexity

Time: O(n). Auxiliary space: O(1). Output occupies the input prefix.

## Edge cases

Empty input is tolerated. All equal values retain one; all distinct values keep their order. The unused suffix has no contract.
