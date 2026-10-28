# 24. Swap Nodes in Pairs

[Official problem](https://leetcode.com/problems/swap-nodes-in-pairs/)

## Problem

Swap every adjacent pair of nodes in a singly linked list. Change links, not node values; an unmatched last node stays in place.

## Example input/output

head = [1,2,3,4] → [2,1,4,3]

## Approach

Keep a predecessor for each pair, relink predecessor→second→first→suffix, and move to the first node as the next predecessor.

## Correctness

The relinking swaps exactly the current two nodes without changing the suffix. After each iteration the processed prefix is correct and connected to the untouched suffix.

## Complexity

O(n) time; O(1) auxiliary space; output reuses nodes.

## Edge cases

Empty list, one node, and odd length.
