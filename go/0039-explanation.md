# 39. Combination Sum

[LeetCode problem](https://leetcode.com/problems/combination-sum/)

## Problem

Given distinct positive candidate integers, return all value combinations summing to a positive target. A candidate may be used any number of times; combination order is irrelevant.

## Example

[2,3,6,7], target=7 → [[2,2,3],[7]]

## Approach

Sort and backtrack in nondecreasing index order. Reuse the selected index on recursion, and stop a loop once its candidate exceeds the remaining sum.

## Correctness

Positive values guarantee progress. Every multiset has one nondecreasing index representation; recursion explores it exactly once, and only zero remainder emits a combination.

## Complexity

Time: output-sensitive exponential; a coarse bound is O((N+1)^(D+1)·D), D=⌊target/minCandidate⌋, including copies. Auxiliary space: O(D+log N), excluding output. Candidates are sorted in place.

## Edge cases

No solution, a candidate equal to target and repeated use of one candidate work. Distinct positive candidates are required.
