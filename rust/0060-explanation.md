# 60. Permutation Sequence

[Official LeetCode problem](https://leetcode.com/problems/permutation-sequence/)

## Problem

Return the kth lexicographic permutation of digits 1 through n, with 1 ≤ n ≤ 9 and 1 ≤ k ≤ n!.

## Example input/output

n=3, k=3 → "213".

## Approach

Convert k to zero-based rank. Each possible next digit owns a block of (remaining−1)! permutations; select its block and continue with the rank inside it.

## Correctness

Lexicographic order groups all permutations by their first available digit in sorted order. Division identifies the correct block, and remainder gives its exact internal rank. Repeating this argument selects the unique kth permutation.

## Complexity

O(n²) time because removing a selected digit shifts a vector suffix, and O(n) auxiliary space plus O(n) output.

## Edge cases

The first and last permutations, n=1, and block-boundary ranks are handled. Factorials fit usize for n≤9.
