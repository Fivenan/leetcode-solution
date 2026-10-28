# 40. Combination Sum II

[LeetCode problem](https://leetcode.com/problems/combination-sum-ii/)

## Problem

Return all distinct combinations of positive candidate values summing to target. Input may have duplicates, but each input position can be used at most once.

## Example

[10,1,2,7,6,1,5], target=8 → [[1,1,6],[1,2,5],[1,7],[2,6]]

## Approach

Sort and backtrack with the next index after a choice. Skip equal alternatives at the same recursion depth, while allowing equal values at later depths.

## Correctness

Advancing indices prevents reuse. Each distinct value multiset has a representation using the earliest available equal choices, which remains explored; skipping equivalent siblings removes duplicate results.

## Complexity

Time: O(n·2^n) conservative bound including result copies. Auxiliary space: O(n), excluding output; input is sorted in place.

## Edge cases

Repeated values may appear in a result when supplied multiple times. No solution produces an empty slice.
