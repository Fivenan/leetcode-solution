# 1. Two Sum

[Official problem](https://leetcode.com/problems/two-sum/)

## Problem

Given integer array nums and target, return distinct indices whose values sum to target. Exactly one answer exists; the same element cannot be reused.

## Example input/output

nums = [2,7,11,15], target = 9 → [0,1]

## Approach

Scan left to right, storing each seen value and index in a hash map. Look up the needed complement before inserting the current value.

## Correctness

When the second endpoint of the unique pair is visited, the first endpoint is in the map. Looking up before insertion prevents reusing one index.

## Complexity

Expected O(n) time; O(n) auxiliary space; O(1) result.

## Edge cases

Duplicate values, negative values, and a pair at either end. Widen subtraction so an overflowing complement cannot become a false match.
