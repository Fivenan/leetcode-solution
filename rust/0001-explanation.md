# 1. Two Sum

[Official LeetCode problem](https://leetcode.com/problems/two-sum/)

## Problem

Return the indices of two distinct array elements summing to target. The judge guarantees exactly one pair.

## Example input/output

[2,7,11,15], target 9 → [0,1].

## Approach

Scan once, storing the index of each earlier value in a hash map. Look up the required complement before inserting the current value.

## Correctness

A returned complement was seen at a smaller index, so the indices differ and their values sum to target. When the guaranteed pair’s second element is visited, the first is in the map.

## Complexity

Expected O(n) time and O(n) auxiliary space; O(1) output.

## Edge cases

Duplicate values work because lookup precedes insertion. Negative values and a pair at the ends need no special handling. Judge bounds keep subtraction in i32 range.
