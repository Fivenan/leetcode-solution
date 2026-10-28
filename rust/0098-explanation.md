# 98. Validate Binary Search Tree

[Official LeetCode problem](https://leetcode.com/problems/validate-binary-search-tree/)

## Problem

Check that every node’s left descendants are strictly smaller and right descendants strictly larger in a binary search tree. Equal keys are invalid.

## Example input/output

[2,1,3] → true; [5,1,4,null,null,3,6] → false.

## Approach

Traverse inorder iteratively and require every value to be strictly greater than its predecessor.

## Correctness

A strict BST has strictly increasing inorder traversal. Conversely, if inorder is increasing, every left-subtree value precedes and is below its root, and every right-subtree value follows and exceeds it; this holds recursively for all nodes.

## Complexity

O(n) time and O(h) auxiliary stack space; O(1) output. Rc clones are ownership handles, not copies of tree nodes.

## Edge cases

Empty trees, duplicate keys, deep ancestor violations, and i32 extreme values work because previous is an Option rather than a numeric sentinel.
