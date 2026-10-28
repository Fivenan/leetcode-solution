# 96. Unique Binary Search Trees

[Official problem](https://leetcode.com/problems/unique-binary-search-trees/)

## Problem

Count structurally distinct BSTs containing exactly the values 1..n, for 1 ≤ n ≤ 19. Return the count, which fits signed int.

## Example input/output

n = 3 → 5

## Approach

The BST counts are Catalan numbers. Start with C₀=1 and apply the exact multiplicative recurrence Cₖ₊₁=Cₖ·2·(2k+1)/(k+2). This computes each next count with constant storage and avoids the quadratic root-split sum.

## Correctness

A root split produces disjoint left and right value sets, and every pair of valid subtrees creates one unique BST. Thus the counts satisfy C₀=1 and Cₙ=Σ CᵢCₙ₋₁₋ᵢ, the Catalan recurrence. Its closed form Cₖ=binomial(2k,k)/(k+1) gives Cₖ₊₁/Cₖ=2(2k+1)/(k+2) by cancellation. The loop starts at C₀ and applies this exact ratio, so after n iterations count equals the number of n-node BSTs.

## Complexity

O(n) time; O(1) auxiliary space and output. Division occurs after multiplication and is exact. For n≤19, the largest pre-division product is C₁₈·2·37=35,345,263,800, safely within long; C₁₉=1,767,263,190 fits int.

## Edge cases

n = 1 starts from the empty-tree count and produces one tree; n = 19 exercises the largest supported numerator and result.
