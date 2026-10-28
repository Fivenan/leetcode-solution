# 24. Swap Nodes in Pairs

[Official LeetCode problem](https://leetcode.com/problems/swap-nodes-in-pairs/)

## Problem

Swap every adjacent pair of list nodes without changing node values.

## Example input/output

[1,2,3,4] → [2,1,4,3].

## Approach

Detach two nodes at a time, connect second to first, append that pair, and retain a mutable reference to the next output link.

## Correctness

Each iteration emits the next original pair in reversed order, preserving the order of all pairs. An unmatched last node is appended unchanged, exactly as required.

## Complexity

O(n) time and O(1) auxiliary space. The output consists of the original boxes, with no recursive stack or node copies.

## Edge cases

Empty, single-node, odd-length, and even-length lists work. All expects assert links established in the same branch.
