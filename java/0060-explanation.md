# 60. Permutation Sequence

[Official problem](https://leetcode.com/problems/permutation-sequence/)

## Problem

Return the kth lexicographic permutation of digits 1..n, with 1 ≤ n ≤ 9 and 1 ≤ k ≤ n!.

## Example input/output

n = 3, k = 3 → "213"

## Approach

Convert k to zero-based rank. At each position, divide by the remaining factorial block size to choose an unused digit, then retain the rank inside that block.

## Correctness

Permutations sharing a first digit form equal-sized consecutive blocks of (remaining-1)!. The quotient selects the correct block and the remainder selects the desired suffix recursively.

## Complexity

O(n²) time due to ArrayList removals; O(n) auxiliary space and O(n) output. Factorials fit int for n ≤ 9.

## Edge cases

First and last permutation, n = 1, and exact factorial-block boundaries.
