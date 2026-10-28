# 35. Search Insert Position

[Official problem](https://leetcode.com/problems/search-insert-position/)

## Problem

In a sorted array of distinct integers, return target index or the index where it should be inserted to preserve order, using logarithmic time.

## Example input/output

nums = [1,3,5,6], target = 2 → 1

## Approach

Find the first array position whose value is at least target with a half-open binary search.

## Correctness

Values before the left boundary are smaller than target and values at or beyond the right boundary are at least target. At convergence the common boundary is the required index.

## Complexity

O(log(n+1)) time; O(1) auxiliary space and output.

## Edge cases

Insertion before the first or after the last element and an exact hit.
