# 94. Binary Tree Inorder Traversal

[Official LeetCode problem](https://leetcode.com/problems/binary-tree-inorder-traversal/)

## Problem

Return the binary tree’s values in inorder: left subtree, node, then right subtree.

## Example input/output

[1,null,2,3] → [1,3,2].

## Approach

Iteratively descend left while stacking Rc handles. Pop and visit a node, then descend through its right subtree.

## Correctness

A node is popped only after its entire left subtree has been processed. Its right subtree is scheduled immediately after its value, so the stack simulation produces exactly the recursive inorder sequence.

## Complexity

O(n) time, O(h) auxiliary stack space for tree height h, and O(n) output space. Rc clones copy shared ownership handles only, never entire subtrees; no tree node is mutated.

## Edge cases

Empty roots and skewed trees work. RefCell borrows are immutable and short-lived; the tree is assumed acyclic as in the judge contract.
