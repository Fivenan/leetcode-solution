# 61. Rotate List

[Official LeetCode problem](https://leetcode.com/problems/rotate-list/)

## Problem

Rotate a singly linked list to the right by nonnegative k positions.

## Example input/output

[1,2,3,4,5], k=2 → [4,5,1,2,3].

## Approach

Count nodes and reduce k modulo length. Detach the suffix of that size, then connect its tail to the original prefix.

## Correctness

A right rotation moves exactly the final k mod length nodes ahead of the remaining prefix, preserving order within both parts. Splitting at length−shift and joining suffix to prefix performs exactly that rearrangement.

## Complexity

O(n) time and O(1) auxiliary space. All nodes are moved and reused, with no cloning, new list nodes, or temporary reference cycle.

## Edge cases

Empty lists, k=0, multiples of length, and one-node lists return directly. Expects rely on the prior length count.
