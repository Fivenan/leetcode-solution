# 47. Permutations II

[Official LeetCode problem](https://leetcode.com/problems/permutations-ii/)

## Problem

Return each distinct permutation of an array that may contain duplicate values.

## Example input/output

[1,1,2] → [[1,1,2],[1,2,1],[2,1,1]].

## Approach

Sort and backtrack over unused indices. Among equal values, require the previous equal index to have been used before selecting the next.

## Correctness

Every value permutation has one representative that selects equal indices in increasing order. The skip rule keeps that representative and removes all alternative equal-index assignments, so outputs are complete and unique.

## Complexity

O(n·n!) worst-case time, O(n) auxiliary used/path/recursion space, and O(n·P) output for P distinct permutations.

## Edge cases

All-equal values produce one answer. Negative values and one-element arrays work; cloning is limited to completed outputs.
