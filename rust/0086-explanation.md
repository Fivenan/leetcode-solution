# 86. Partition List

[Official LeetCode problem](https://leetcode.com/problems/partition-list/)

## Problem

Stably partition a linked list so nodes smaller than x precede nodes greater than or equal to x.

## Example input/output

[1,4,3,2,5,2], x=3 → [1,2,2,4,3,5].

## Approach

Detach nodes in input order and append each to one of two owned lists, then connect the smaller list to the larger one.

## Correctness

Each output bucket receives exactly its qualifying nodes in original order. Concatenating the buckets places every smaller value first while preserving relative order within both required partitions.

## Complexity

O(n) time and O(1) auxiliary space. Output reuses all original nodes; detached next links prevent unintended suffix sharing or cycles.

## Edge cases

An empty bucket, all equal values, and empty input work. All link manipulation uses safe mutable references.
