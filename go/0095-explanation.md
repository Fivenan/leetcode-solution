# 95. Unique Binary Search Trees II

[LeetCode problem](https://leetcode.com/problems/unique-binary-search-trees-ii/)

## Problem

Return all structurally distinct BSTs whose keys are exactly 1..n, where 1≤n≤8. Output tree order is unrestricted.

## Example

n=3 → 5 distinct trees.

## Approach

Choose every value as root, recursively construct possible left and right intervals, and combine every pair. Clone each selected subtree so returned trees have independent nodes.

## Correctness

Every BST root partitions the keys into the smaller left interval and larger right interval. Recursively enumerating these and taking their Cartesian product generates every possible BST exactly once for that root; different roots cannot duplicate a tree.

## Complexity

Time: O(n·Cₙ), including cloning output-sized tree combinations, with Cₙ the nth Catalan number. Space: O(n·Cₙ) for output and temporary recursively built subtree collections; recursion depth O(n). Cloning avoids cross-result aliasing at the cost of allocations.

## Edge cases

n=1 produces one node; n=0 returns no trees defensively. Returned trees do not share nodes, making later independent mutation safe.
