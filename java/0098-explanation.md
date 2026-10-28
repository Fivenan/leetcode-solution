# 98. Validate Binary Search Tree

[Official problem](https://leetcode.com/problems/validate-binary-search-tree/)

## Problem

Determine whether a binary tree is a strict BST: every left-subtree value is smaller than its ancestor and every right-subtree value larger. Duplicate values violate the rule.

## Example input/output

root = [2,1,3] → true; root = [5,1,4,null,null,3,6] → false

## Approach

Perform iterative inorder traversal and require values to be strictly increasing, remembering the previous value in a long.

## Correctness

A valid BST’s inorder traversal is strictly increasing. Conversely, strict inorder order places all values of each left subtree before and below its root and all right values after and above, establishing the BST rule at every node.

## Complexity

O(n) time; O(h) auxiliary stack space; O(1) output.

## Edge cases

Integer.MIN_VALUE, Integer.MAX_VALUE, duplicate values, and a descendant violating a distant ancestor bound.
