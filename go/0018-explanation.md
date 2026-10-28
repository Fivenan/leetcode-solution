# 18. 4Sum

[LeetCode problem](https://leetcode.com/problems/4sum/)

## Problem

Return all distinct value quadruplets from four distinct indices that sum to target. Values and target may reach magnitude 10^9.

## Example

[1,0,-1,0,-2,2], target = 0 → [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

## Approach

Sort, fix two distinct positions, then solve the remaining pair with two pointers. Skip duplicate values at each choice and use int64 for the four-value sum.

## Correctness

Every sorted quadruplet has a unique first pair and a suffix pair found by monotone pointer movement. Skipping equal choices removes repeated representations without dropping a distinct quadruplet.

## Complexity

Time: O(n³). Auxiliary space: O(log n) sorting stack, excluding O(k) quadruplet output. Input is reordered.

## Edge cases

Fewer than four values, all equal values and large magnitudes are covered; widening before addition avoids 32-bit overflow.
