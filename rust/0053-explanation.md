# 53. Maximum Subarray

[Official LeetCode problem](https://leetcode.com/problems/maximum-subarray/)

## Problem

Find the largest sum of any nonempty contiguous subarray of a nonempty integer array.

## Example input/output

[-2,1,-3,4,-1,2,1,-5,4] → 6 from [4,-1,2,1].

## Approach

Track the best sum ending at the current position, choosing between starting at the new value and extending the previous best suffix.

## Correctness

Every subarray ending here is either the single current value or extends a subarray ending immediately before it; retaining the maximum prior suffix is sufficient. The maximum over all endpoints is the global answer.

## Complexity

O(n) time and O(1) auxiliary/output space.

## Edge cases

All-negative arrays return the largest element rather than zero. A single element is handled by initialization; judge bounds keep sums in i32.
