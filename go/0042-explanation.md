# 42. Trapping Rain Water

[LeetCode problem](https://leetcode.com/problems/trapping-rain-water/)

## Problem

Each nonnegative array value is a unit-width elevation bar. Return the total water trapped after raining.

## Example

[0,1,0,2,1,0,1,3,2,1,2,1] → 6

## Approach

Maintain maxima outside two pointers. Process the side with the smaller maximum, whose water level is already bounded by a boundary at least as high on the opposite side.

## Correctness

When leftMax≤rightMax, the left bar can hold exactly max(0,leftMax-height[left]); the known right boundary cannot be limiting. The symmetric argument holds on the right, settling every position once.

## Complexity

Time: O(n). Auxiliary space and output: O(1).

## Edge cases

Empty arrays, monotone terrain, all zeros and equal boundary heights work. Water volume fits int under the supplied constraints.
