# 99. Recover Binary Search Tree

[LeetCode problem](https://leetcode.com/problems/recover-binary-search-tree/)

## Problem

Exactly two node values in a BST have been swapped. Restore the BST in place without changing its shape; the intended follow-up uses constant auxiliary space.

## Example

[3,1,4,null,null,2] → [2,1,4,null,null,3]

## Approach

Use Morris inorder traversal, temporarily threading predecessors to avoid a stack. At descending adjacent pairs, record the first preceding node and the most recent current node; swap their values after traversal.

## Correctness

Swapping two sorted inorder values creates one inversion when adjacent, or two when separated. The larger misplaced value is the predecessor of the first inversion and the smaller is the current value of the last. Morris visits inorder and removes each thread, preserving shape.

## Complexity

Time: O(n). Auxiliary space: O(1). No output nodes are allocated; values are changed and all temporary links are restored.

## Edge cases

Adjacent and distant swapped nodes, a swapped root and skewed trees are supported. Traversal completes before swapping to ensure every temporary thread is removed.
