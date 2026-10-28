# 95. Unique Binary Search Trees II

[Official problem](https://leetcode.com/problems/unique-binary-search-trees-ii/)

## Problem

Return every structurally distinct BST containing values 1..n exactly once, for 1 ≤ n ≤ 8. Result order is arbitrary.

## Example input/output

n = 3 → five distinct BSTs

## Approach

Memoize prototype trees for each value interval. For every possible root combine every left prototype with every right prototype, then deep-copy each final tree so returned trees do not share mutable nodes.

## Correctness

A BST root uniquely partitions smaller values to its left and larger values to its right. Enumerating every root and every pair of recursively valid subtrees produces every BST once; copying preserves shape and values while separating ownership.

## Complexity

O(nCₙ) time and output nodes for Catalan number Cₙ; O(Cₙ + n²) auxiliary prototype/memo storage and O(n) recursion for this interval construction. Prototypes may share nodes internally, but final outputs do not.

## Edge cases

n = 1, empty child intervals, and independent returned trees.
