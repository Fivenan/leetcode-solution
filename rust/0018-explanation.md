# 18. 4Sum

[Official LeetCode problem](https://leetcode.com/problems/4sum/)

## Problem

Return all distinct quadruplets using four different indices whose values sum to target.

## Example input/output

[1,0,-1,0,-2,2], target 0 → [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]].

## Approach

Sort, fix two distinct-position values, and solve the remaining pair with two pointers. Skip equal values at each choice.

## Correctness

For fixed first values, monotone pointer movement discards only pairs whose sum cannot improve toward target. Every sorted quadruplet has one such pair of first positions; duplicate skipping retains one representative per value quadruplet.

## Complexity

O(n³) time, O(log n) auxiliary sorting stack, and O(k) output for k quadruplets.

## Edge cases

Fewer than four items returns empty. Duplicate-heavy input yields unique results. i64 sums cover the four i32 values without overflow.
