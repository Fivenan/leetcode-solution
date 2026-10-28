# 1. Two Sum

[LeetCode problem](https://leetcode.com/problems/two-sum/)

## Problem

Return the indices of two different elements whose sum equals target. The input guarantees exactly one answer; the same element cannot be used twice.

## Example

nums = [2,7,11,15], target = 9 → [0,1]

## Approach

Scan once, storing each previously seen value and its index. Look up target minus the current value before inserting it.

## Correctness

At index i the map contains only earlier positions. A found complement therefore gives two distinct valid indices; the guaranteed pair is found when its later member is scanned.

## Complexity

Time: expected O(n). Auxiliary space: O(n). Output: O(1).

## Edge cases

Duplicates work because lookup happens before insertion. Negative values and zero need no special handling.
