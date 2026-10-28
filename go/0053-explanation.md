# 53. Maximum Subarray

[LeetCode problem](https://leetcode.com/problems/maximum-subarray/)

## Problem

Return the greatest sum of any nonempty contiguous subarray of a nonempty integer array.

## Example

[-2,1,-3,4,-1,2,1,-5,4] → 6, from [4,-1,2,1]

## Approach

Kadane’s algorithm tracks the best sum ending at the current position. Extend it only when the previous sum is nonnegative; otherwise start at the current value.

## Correctness

Any best subarray ending here either starts here or extends the best one ending immediately before it. This recurrence finds every endpoint optimum; their maximum is the global answer.

## Complexity

Time: O(n). Auxiliary space and output: O(1).

## Edge cases

All-negative inputs return the largest element rather than zero. One element and zero sums work.
