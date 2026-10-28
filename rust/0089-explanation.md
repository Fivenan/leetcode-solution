# 89. Gray Code

[Official LeetCode problem](https://leetcode.com/problems/gray-code/)

## Problem

Return a cyclic n-bit Gray sequence beginning at zero: all 2ⁿ values appear once and adjacent values, including last and first, differ in one bit.

## Example input/output

n=2 → [0,1,3,2].

## Approach

Enumerate ordinary integers i and map each to i XOR (i shifted right by one).

## Correctness

The mapping is invertible by recovering bits from high to low, so every n-bit value appears once. When i increments, its trailing run of bits flips but adjacent XOR differences cancel except at one position. The first and final Gray values also differ in exactly one bit.

## Complexity

O(2ⁿ) time and O(1) auxiliary state besides O(2ⁿ) output space.

## Edge cases

n=1 yields [0,1]. The judge’s n≤16 makes shifts and output values safe in i32.
