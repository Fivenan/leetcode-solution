# 75. Sort Colors

[Official LeetCode problem](https://leetcode.com/problems/sort-colors/)

## Problem

Sort an array containing only 0, 1, and 2 in place without calling a general sorting function.

## Example input/output

[2,0,2,1,1,0] → [0,0,1,1,2,2].

## Approach

Use Dutch-national-flag partitioning: [0,low) is zero, [low,mid) is one, [mid,high) is unknown, and [high,n) is two.

## Correctness

Each branch moves the current value to its correct partition while preserving the other partition invariants. A value swapped from the unknown right boundary must be inspected again, so mid stays in place for twos. When unknown is empty, the whole array is sorted.

## Complexity

O(n) time and O(1) auxiliary/output space.

## Edge cases

All-equal and empty arrays work. Only values 0, 1, and 2 are permitted by contract.
