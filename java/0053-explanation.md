# 53. Maximum Subarray

[Official problem](https://leetcode.com/problems/maximum-subarray/)

## Problem

Find the largest sum of a nonempty contiguous subarray of a nonempty integer array. Judge bounds keep relevant sums in the int range.

## Example input/output

nums = [-2,1,-3,4,-1,2,1,-5,4] → 6

## Approach

Kadane dynamic programming keeps the largest sum of a subarray ending at the current element and the best seen anywhere.

## Correctness

A nonempty subarray ending at i either starts at i or extends one ending at i-1. Taking the larger of those two possibilities yields the exact ending optimum; their maximum is the global optimum.

## Complexity

O(n) time; O(1) auxiliary space and output.

## Edge cases

All negative numbers, one element, and a best subarray spanning the whole array.
