# 40. Combination Sum II

[Official LeetCode problem](https://leetcode.com/problems/combination-sum-ii/)

## Problem

Return unique combinations of positive candidate entries summing to target, using each input index at most once. Input values may repeat.

## Example input/output

[10,1,2,7,6,1,5], target 8 → [[1,1,6],[1,2,5],[1,7],[2,6]].

## Approach

Sort and backtrack, advancing to i+1 after using an entry. Skip equal values only when they are alternative choices at the same recursion depth.

## Correctness

Increasing indices prevent index reuse. Any valid multiset has an earliest-index representative that survives duplicate skipping; other representatives differ only in equal-index choices and are suppressed. Emitting only zero remainder gives exactly the required combinations.

## Complexity

O(n·2^n) worst-case time including path copying and O(n) auxiliary recursion/path space, plus O(K) total output elements. Positive-value pruning often reduces the explored search.

## Edge cases

Duplicates can both appear in one answer when separate entries exist. No solution, repeated values, and a single exact match work.
