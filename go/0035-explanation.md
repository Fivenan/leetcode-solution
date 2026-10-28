# 35. Search Insert Position

[LeetCode problem](https://leetcode.com/problems/search-insert-position/)

## Problem

In a sorted array of distinct integers, return target’s index or the index where it should be inserted to preserve order. Use logarithmic time.

## Example

[1,3,5,6], target=2 → 1

## Approach

Perform a lower-bound search on the half-open interval [0,n), looking for the first value at least target.

## Correctness

All positions before lo are below target, and all positions at or after hi are at least target. Shrinking the interval preserves these facts, so their meeting point is the required index.

## Complexity

Time: O(log(n+1)). Auxiliary space and output: O(1).

## Edge cases

Insertion before the first element or after the last, exact hits and an empty array are handled.
