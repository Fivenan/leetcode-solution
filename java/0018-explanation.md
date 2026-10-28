# 18. 4Sum

[Official problem](https://leetcode.com/problems/4sum/)

## Problem

Return every unique quadruple of values using four distinct indices whose sum equals target. Result order is arbitrary.

## Example input/output

nums = [1,0,-1,0,-2,2], target = 0 → [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

## Approach

Sort, fix two distinct-value outer positions, then use two pointers for the remaining pair; skip duplicates at each level.

## Correctness

For each fixed pair, monotonicity of sorted endpoints makes the two-pointer search complete. Each sorted quadruple has exactly one retained outer pair and endpoint pair after duplicate skipping.

## Complexity

O(n³) time; O(log n) sorting stack auxiliary space; O(k) output. Input is sorted.

## Edge cases

Fewer than four elements, all equal values, and sums outside int range (use long).
