# 94. Binary Tree Inorder Traversal

[Official problem](https://leetcode.com/problems/binary-tree-inorder-traversal/)

## Problem

Return tree node values in inorder: left subtree, node, then right subtree. The binary tree may be empty.

## Example input/output

root = [1,null,2,3] → [1,3,2]

## Approach

Iteratively push the current left spine, pop and emit its next node, then visit its right subtree.

## Correctness

The stack holds ancestors awaiting their own visit after their left subtrees. At each pop that left subtree is complete and no earlier inorder node remains unvisited; moving right continues the specified order.

## Complexity

O(n) time; O(h) auxiliary stack space for height h; O(n) output.

## Edge cases

Empty tree, skewed trees, and duplicate values.
