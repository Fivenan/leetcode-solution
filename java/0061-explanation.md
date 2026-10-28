# 61. Rotate List

[Official problem](https://leetcode.com/problems/rotate-list/)

## Problem

Rotate a singly linked list right by nonnegative k positions and return the new head. The list may be empty; k can exceed its length.

## Example input/output

head = [1,2,3,4,5], k = 2 → [4,5,1,2,3]

## Approach

Measure length, reduce k modulo length, connect the tail to the head, then break the cycle just before the new head.

## Correctness

A right rotation by k makes the node at offset n-k the new first node while preserving cyclic order. The temporary cycle provides that order and breaking its predecessor produces precisely the rotated list.

## Complexity

O(n) time; O(1) auxiliary space; output reuses nodes.

## Edge cases

Empty or single-node lists, k = 0, and multiples of the list length.
