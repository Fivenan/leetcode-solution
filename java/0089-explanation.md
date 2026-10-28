# 89. Gray Code

[Official problem](https://leetcode.com/problems/gray-code/)

## Problem

Return a cyclic n-bit Gray sequence of length 2ⁿ starting with zero: every value appears once, and adjacent entries including last-to-first differ in one bit. 1 ≤ n ≤ 16.

## Example input/output

n = 2 → [0,1,3,2]

## Approach

For each binary integer i in order, output i XOR (i shifted right by one).

## Correctness

When incrementing i, a run of trailing ones flips together with the next zero. XOR with the shifted copy cancels all but one changed bit. The transformation is invertible by prefix XOR, giving distinct values, and the final code has only its top bit set, differing from zero in one bit.

## Complexity

O(2ⁿ) time; O(1) auxiliary space excluding O(2ⁿ) output.

## Edge cases

n = 1 and the wraparound adjacency from the last code to zero.
