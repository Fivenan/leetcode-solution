# 46. Permutations

[Official LeetCode problem](https://leetcode.com/problems/permutations/)

## Problem

Return all permutations of an array of distinct integers.

## Example input/output

[1,2,3] has 6 permutations, including [1,2,3] and [3,2,1].

## Approach

Fix one position at a time by swapping every remaining candidate into it, recursively permuting the suffix, and restoring the swap.

## Correctness

Every permutation has exactly one choice for the current position and one permutation of the remaining distinct values. The recursion enumerates these disjoint choices, yielding every permutation exactly once.

## Complexity

O(n·n!) time including copying outputs, O(n) auxiliary recursion space, and O(n·n!) output space.

## Edge cases

One value yields one permutation. The owned vector is reused during search; only completed outputs are cloned.
