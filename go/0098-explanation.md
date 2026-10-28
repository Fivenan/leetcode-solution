# 98. Validate Binary Search Tree

[LeetCode problem](https://leetcode.com/problems/validate-binary-search-tree/)

## Problem

Check whether every node of a binary tree has all left-subtree keys strictly smaller and all right-subtree keys strictly greater. Duplicate keys are invalid.

## Example

[2,1,3] → true; [5,1,4,null,null,3,6] → false

## Approach

Perform iterative inorder traversal and ensure each visited value is strictly greater than its predecessor.

## Correctness

A BST’s inorder sequence is strictly increasing. Conversely, a strictly increasing inorder sequence puts every left-subtree value before and below its root and every right-subtree value after and above it, satisfying the global BST rules.

## Complexity

Time: O(n). Auxiliary space: O(h) for height h. Output: O(1).

## Edge cases

Equal values are rejected. A previous-node pointer avoids artificial sentinels, so minimum/maximum int keys work. Empty trees are accepted.
