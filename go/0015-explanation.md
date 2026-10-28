# 15. 3Sum

[LeetCode problem](https://leetcode.com/problems/3sum/)

## Problem

Return every distinct value triplet using three distinct indices whose sum is zero. Result order is unrestricted.

## Example

[-1,0,1,2,-1,-4] → [[-1,-1,2],[-1,0,1]]

## Approach

Sort in place, fix each distinct first value, and use two pointers for a zero-sum pair in the remaining suffix. Skip repeated values after each match.

## Correctness

Sorted order makes a too-small sum increase only by moving left inward, and a too-large sum decrease by moving right inward. Every first value and feasible pair is considered; duplicate skipping preserves one copy of each triplet.

## Complexity

Time: O(n²). Auxiliary space: O(log n) for Go sorting’s stack, excluding O(k) output triplets. Input is reordered.

## Edge cases

Fewer than three values and no matches return an empty slice. Repeated zeros produce exactly one triplet.
