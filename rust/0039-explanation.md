# 39. Combination Sum

[Official LeetCode problem](https://leetcode.com/problems/combination-sum/)

## Problem

Return all unique combinations of distinct positive candidate values summing to target. Each candidate may be reused any number of times.

## Example input/output

[2,3,6,7], target 7 → [[2,2,3],[7]].

## Approach

Sort and backtrack in nondecreasing candidate-index order. Recurse from the same index to permit reuse and stop when the next value exceeds the remaining sum.

## Correctness

Positive values ensure every branch terminates. Every multiset has one nondecreasing representation, which the recursion explores if its sum is target. The index restriction prevents permutation duplicates, and only zero-remainder paths are emitted.

## Complexity

For c candidates and maximum depth D=floor(target/min candidate), a loose bound is O(c log c + (D+1)·c^(D+1) + K) time and O(D+log c) auxiliary space, plus K total output elements. This includes sorting, the c=1 case, and D=0. Output-path clones create independent combinations; sorting uses a logarithmic stack.

## Edge cases

No solution returns empty; exact single-value matches and repeated uses are supported. Positive candidates are essential for termination.
