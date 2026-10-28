# 78. Subsets

[LeetCode problem](https://leetcode.com/problems/subsets/)

## Problem

Return the power set of an array of distinct integers, including the empty subset. Answer order is unrestricted.

## Example

[1,2] → [[],[1],[2],[1,2]]

## Approach

Start with the empty subset. For each new value, append a copy of every existing subset with that value added.

## Correctness

Each subset either excludes the new value, remaining in the old half, or includes it, appearing once in the copied half. Induction enumerates every subset exactly once.

## Complexity

Time: O(n·2^n). Auxiliary space: O(1) beyond the O(n·2^n) independently allocated output elements and slice headers.

## Edge cases

One value produces two subsets. Empty input is tolerated and yields the single empty subset.
