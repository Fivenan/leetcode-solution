# 40. Combination Sum II

[Official problem](https://leetcode.com/problems/combination-sum-ii/)

## Problem

Return unique value combinations summing to positive target from positive candidates. Each input occurrence may be used at most once; duplicate candidate values are allowed.

## Example input/output

candidates = [10,1,2,7,6,1,5], target = 8 → [[1,1,6],[1,2,5],[1,7],[2,6]]

## Approach

Sort and backtrack with strictly increasing indices. At each recursion depth skip equal values after the first candidate of that depth.

## Correctness

Increasing indices enforce single use. Equal choices at the same depth would produce identical value combinations, so skipping them removes duplicates while retaining the first occurrence capable of representing each combination.

## Complexity

O(n·2ⁿ) worst-case time including output copying, plus sorting; O(n) auxiliary recursion/path space; O(nK) output upper bound. Input is sorted.

## Edge cases

Duplicate values that must both be used, no solution, and candidates greater than target.
