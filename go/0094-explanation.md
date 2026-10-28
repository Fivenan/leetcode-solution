# 94. Binary Tree Inorder Traversal

[LeetCode problem](https://leetcode.com/problems/binary-tree-inorder-traversal/)

## Problem

Return the inorder (left subtree, node, right subtree) values of a binary tree. Empty trees are allowed.

## Example

root=[1,null,2,3] → [1,3,2]

## Approach

Use an explicit stack to descend the left spine. Pop and emit a node after its left subtree is done, then traverse its right subtree.

## Correctness

A stacked node waits until all nodes in its left subtree have been emitted. Popping emits it next, and following its right link enforces the remaining inorder requirement.

## Complexity

Time: O(n). Auxiliary space: O(h) for tree height h, excluding O(n) output.

## Edge cases

Empty trees, a single node and left/right-skewed trees are handled without recursive calls.
