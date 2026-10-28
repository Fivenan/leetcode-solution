# 96. Unique Binary Search Trees

[Official LeetCode problem](https://leetcode.com/problems/unique-binary-search-trees/)

## Problem

Count structurally unique BSTs containing values 1 through n, for 1 ≤ n ≤ 19.

## Example input/output

n=3 → 5.

## Approach

BST counts are Catalan numbers. Evaluate the exact multiplicative recurrence C₀=1 and C(k+1)=Ck·2·(2k+1)/(k+2).

## Correctness

Choosing a root partitions a BST’s other keys into independent smaller and larger subtrees, giving the Catalan recurrence. Its closed form Ck=C(2k,k)/(k+1) yields the stated consecutive-term ratio by cancellation. Every loop iteration therefore advances the exact Catalan count by one size.

## Complexity

O(n) time and O(1) auxiliary/output space. For n≤19, the largest pre-division product is 477638700·74, safely inside i64; the final 1767263190 fits i32.

## Edge cases

n=1 yields one tree; empty subtrees correspond to C₀=1, and the largest allowed n is safe.
