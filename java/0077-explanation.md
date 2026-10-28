# 77. Combinations

[Official problem](https://leetcode.com/problems/combinations/)

## Problem

Return all subsets of k distinct numbers selected from 1..n, with 1 ≤ k ≤ n. Order is arbitrary.

## Example input/output

n = 4, k = 2 → [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

## Approach

Backtrack over increasing selected values, stopping the loop early when too few larger numbers remain to finish the combination.

## Correctness

Increasing order gives every subset a unique representation. The loop considers each feasible next value, and its upper bound excludes only prefixes that cannot supply the remaining number of choices.

## Complexity

O(k·C(n,k)) time including copying; O(k) auxiliary recursion/path space; O(k·C(n,k)) output.

## Edge cases

k = 1, k = n, and the final feasible starting value.
