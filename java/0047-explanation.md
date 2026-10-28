# 47. Permutations II

[Official problem](https://leetcode.com/problems/permutations-ii/)

## Problem

Return each distinct permutation of an integer array that may contain duplicate values. Result order does not matter.

## Example input/output

nums = [1,1,2] → [[1,1,2],[1,2,1],[2,1,1]]

## Approach

Sort and backtrack using a used-index array. Skip an equal value when its identical predecessor is unused in the current path.

## Correctness

Choosing identical values in their index order removes interchangeable choices at a depth. Every value permutation has exactly one such index-order representation, so it is generated once.

## Complexity

O(n·n!) worst-case time (fewer with duplicates); O(n) auxiliary path/used/recursion space plus sorting stack; O(nK) output for K distinct permutations. Input is sorted.

## Edge cases

All equal values, mixed duplicates, and one element.
