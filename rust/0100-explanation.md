# 100. Same Tree

[Official LeetCode problem](https://leetcode.com/problems/same-tree/)

## Problem

Decide whether two binary trees have identical structure and corresponding node values.

## Example input/output

[1,2,3] and [1,2,3] → true; [1,2] and [1,null,2] → false.

## Approach

Iteratively compare corresponding node pairs, rejecting a value or presence mismatch and scheduling both pairs of children otherwise.

## Correctness

Two empty positions agree. Two present nodes agree exactly when their values and corresponding children agree. The stack explores all these necessary and sufficient comparisons, returning true only after every pair agrees.

## Complexity

O(n) time for n corresponding positions visited (up to both tree sizes), O(h) auxiliary depth-first stack space, and O(1) output. Only Rc handles are cloned; tree nodes are neither copied nor mutated.

## Edge cases

Both empty, one empty, value mismatches, and shape mismatches work. Immutable borrows also permit both handles to point to the same tree.
