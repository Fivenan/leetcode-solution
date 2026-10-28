# 96. Unique Binary Search Trees

[LeetCode problem](https://leetcode.com/problems/unique-binary-search-trees/)

## Problem

Count structurally distinct BSTs whose keys are 1..n, where 1≤n≤19.

## Example

n=3 → 5

## Approach

BST shape counts are Catalan numbers. Start at C₀=1 and use the exact multiplicative recurrence Cₖ₊₁=Cₖ·2·(2k+1)/(k+2), keeping int64 intermediates.

## Correctness

Every BST has one unique root rank. Summing the independent counts of its possible left/right subtree structures gives the Catalan recurrence Cₙ=Σ Cₗ·Cₙ₋₁₋ₗ. Its closed form is Cₙ=C(2n,n)/(n+1); taking the ratio of successive closed forms gives 2·(2k+1)/(k+2), so the iterative update computes the same exact count. The largest intermediate product for n≤19 fits int64.

## Complexity

Time: O(n) arithmetic operations. Auxiliary space and output: O(1). The n≤19 bound keeps the result within signed 32-bit range, and int64 safely stores the pre-division product.

## Edge cases

The empty subtree count is one, necessary when a root has no child on one side. n=1 gives one tree.
