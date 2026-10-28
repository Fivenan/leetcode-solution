# 46. Permutations

[Official problem](https://leetcode.com/problems/permutations/)

## Problem

Return all permutations of an array of distinct integers; each value must appear once in each result.

## Example input/output

nums = [1,2,3] → six permutations

## Approach

Fix one position at a time by swapping every remaining value into it, recurse, then undo the swap.

## Correctness

At depth i, the prefix is fixed and the suffix contains exactly unused values. Each possible next value starts a disjoint set of permutations, and restoring swaps makes all branches available.

## Complexity

O(n·n!) time and output space; O(n) auxiliary recursion space. The input is restored.

## Edge cases

One value, negative values, and verifying input restoration.
