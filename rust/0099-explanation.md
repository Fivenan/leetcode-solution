# 99. Recover Binary Search Tree

[Official LeetCode problem](https://leetcode.com/problems/recover-binary-search-tree/)

## Problem

Repair a BST in which exactly two node values have been swapped, leaving its structure unchanged.

## Example input/output

[3,1,4,null,null,2] → [2,1,4,null,null,3].

## Approach

Use Morris inorder traversal. Before descending left, temporarily connect that subtree’s rightmost node back to the current node through its vacant right link. On returning through that thread, detect it with Rc::ptr_eq, remove it, and visit the current node. Remember the previous node of the first inorder decrease and the current node of the latest decrease. Finish the entire traversal before swapping their values.

## Correctness

Each temporary thread returns from a completed left subtree to its parent; the second encounter removes that thread before visiting the parent. Nodes without a left subtree are visited immediately. Thus Morris traversal visits exactly the inorder sequence and restores every modified link. Swapping two entries of a sorted sequence creates one decrease if adjacent or two if separated. The larger swapped entry is just before the first decrease and the smaller is just after the last. Swapping those values restores the strictly increasing inorder order and hence the BST. Traversal never stops early, so all temporary threads are removed even when both wrong nodes have already been identified.

## Complexity

O(n) time and O(1) auxiliary space, with O(1) output. Each predecessor-search edge is traversed only a constant number of times; each return thread is created and removed once. A fixed number of Rc handles replaces the stack. Threads reuse existing vacant right-link fields, so no tree nodes or traversal containers are allocated.

## Edge cases

Adjacent or separated swapped nodes, swapped root values, and skewed trees work. Rc::ptr_eq identifies a return thread by node identity rather than by the temporarily incorrect values. Every RefCell borrow ends before a link or value mutation. Threads temporarily create strong-reference cycles; the complete traversal removes every one before the final value swap, preserving the original shape and child identities. No subtrees are copied. Input is a proper acyclic tree under the judge contract.
