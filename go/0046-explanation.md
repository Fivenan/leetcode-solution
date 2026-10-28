# 46. Permutations

[LeetCode problem](https://leetcode.com/problems/permutations/)

## Problem

Return every permutation of an array of distinct integers. Answer order is unrestricted.

## Example

[1,2] → [[1,2],[2,1]]

## Approach

Backtrack by swapping each remaining element into the next output position. Copy the whole array at a leaf and undo every swap afterward.

## Correctness

At each position the recursion chooses each unused element once. Distinct input values give a unique choice path for every permutation, and undoing swaps restores the state for siblings.

## Complexity

Time: O(n·n!). Auxiliary space: O(n) recursion, excluding O(n·n!) output. The input is restored on return.

## Edge cases

One value produces one result. Empty input is tolerated as one empty permutation.
