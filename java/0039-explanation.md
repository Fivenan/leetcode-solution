# 39. Combination Sum

[Official problem](https://leetcode.com/problems/combination-sum/)

## Problem

Return unique combinations of distinct positive candidates that sum to positive target. Each candidate can be reused unlimited times; combination order is irrelevant.

## Example input/output

candidates = [2,3,6,7], target = 7 → [[2,2,3],[7]]

## Approach

Sort candidates and backtrack using a nondecreasing candidate index. Recurse with the same index to allow reuse; stop when a sorted value exceeds the remainder.

## Correctness

Nondecreasing indices give each value multiset exactly one representation. Every positive-sum solution selects a candidate no larger than the remaining target, so pruning removes no solution and remainder decreases to termination.

## Complexity

For c candidates, depth d = floor(target/minCandidate), and K results: O(c·C(c+d,d) + Kd + c log c) is a conservative bound, counting all nondecreasing prefixes of depth at most d; O(d + log c) auxiliary recursion/path/sorting space; O(Kd) output upper bound. Input is sorted.

## Edge cases

No solution, exact single candidate, and repeated use of the smallest candidate.
