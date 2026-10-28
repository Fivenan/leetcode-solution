# 25. Reverse Nodes in k-Group

[Official LeetCode problem](https://leetcode.com/problems/reverse-nodes-in-k-group/)

## Problem

Reverse each complete consecutive group of k nodes; leave a final shorter group unchanged. The contract guarantees 1 ≤ k ≤ list length.

## Example input/output

[1,2,3,4,5], k=2 → [2,1,4,3,5].

## Approach

Probe ahead for k nodes before changing links. Reverse a complete group by moving boxes onto a temporary head, append it, and advance the output link past that group.

## Correctness

Only complete groups enter the reversal loop, which reverses exactly their k links. Appending groups preserves group order. A failed probe attaches the untouched remainder, so every required group and leftover node is correct.

## Complexity

O(n) time (each node is probed, moved, and passed a bounded number of times), O(1) auxiliary space. All output nodes are reused; no recursive stack or cloned suffixes.

## Edge cases

k=1, k equal to list length, and a short final group are supported. Positive k prevents a zero-progress loop.
