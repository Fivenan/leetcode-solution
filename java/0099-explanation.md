# 99. Recover Binary Search Tree

[Official problem](https://leetcode.com/problems/recover-binary-search-tree/)

## Problem

Exactly two node values in a BST have been swapped. Restore the tree by swapping them back without changing its structure; use constant auxiliary space.

## Example input/output

root = [3,1,4,null,null,2] → [2,1,4,null,null,3]

## Approach

Use Morris inorder traversal, temporarily threading each left-subtree predecessor to its ancestor. Record the first inversion’s previous node and each inversion’s current node, then swap the recorded values.

## Correctness

The inorder order of a BST is sorted. Swapping two elements creates one inversion if adjacent or two otherwise; the first larger predecessor and final smaller current node are exactly the exchanged values. Morris threads simulate inorder and are removed on return, preserving structure.

## Complexity

O(n) time; O(1) auxiliary space; in-place output. Every temporary thread is restored before completion.

## Edge cases

Adjacent versus separated swapped inorder positions, skewed trees, and swapped root values.
