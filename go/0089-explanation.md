# 89. Gray Code

[LeetCode problem](https://leetcode.com/problems/gray-code/)

## Problem

Return a cyclic n-bit Gray-code sequence of all 2^n distinct numbers, starting at zero, whose consecutive values and last/first values differ in one bit. The problem has 1≤n≤16.

## Example

n=2 → [0,1,3,2]

## Approach

Use the binary-reflected Gray-code mapping g(i)=i XOR (i shifted right by one) for each integer in ascending order.

## Correctness

When binary i increments, a suffix of bits flips; XOR with the shifted value cancels all but one transition bit. The mapping is invertible, so values are distinct; the final code is the top bit alone, one bit from zero.

## Complexity

Time: O(2^n). Auxiliary space: O(1), excluding O(2^n) output.

## Edge cases

n=1 gives [0,1]. The shift and allocation remain safe within the n≤16 contract.
