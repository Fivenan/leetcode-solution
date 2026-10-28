# 60. Permutation Sequence

[LeetCode problem](https://leetcode.com/problems/permutation-sequence/)

## Problem

Return the kth lexicographic permutation of digits 1..n, where 1≤n≤9 and 1≤k≤n!.

## Example

n=3, k=3 → "213"

## Approach

Convert k to zero-based rank. Each possible first digit occupies (remaining-1)! consecutive permutations; use quotient to choose the digit and remainder to rank the suffix.

## Correctness

Lexicographic ordering groups permutations by their first remaining digit in ascending order. Equal-size factorial blocks make quotient and remainder select exactly the block and position requested, recursively.

## Complexity

Time: O(n²) for removing chosen digits from a slice. Auxiliary space: O(n), plus O(n) output. Under n≤9, factorial values fit int.

## Edge cases

First and last ranks, n=1 and block-boundary ranks work. k must be within the guaranteed range.
