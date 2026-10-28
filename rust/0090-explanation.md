# 90. Subsets II

[Official LeetCode problem](https://leetcode.com/problems/subsets-ii/)

## Problem

Return every distinct subset of an integer array that may contain duplicates.

## Example input/output

[1,2,2] → [[],[1],[1,2],[1,2,2],[2],[2,2]].

## Approach

Sort and backtrack over increasing indices, emitting the current subset at every state. Skip repeated equal choices at the same depth.

## Correctness

Each value multiset has one path choosing the earliest available equal indices. The skip rule retains that path and suppresses alternative index choices for the same multiset, while deeper recursion can still use multiple equal entries.

## Complexity

O(n·2^n) worst-case time, O(n) auxiliary recursion/path space, and O(n·2^n) worst-case output space.

## Edge cases

The empty subset, all-equal arrays, and negative values are supported.
