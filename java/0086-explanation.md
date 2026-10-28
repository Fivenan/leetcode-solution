# 86. Partition List

[Official problem](https://leetcode.com/problems/partition-list/)

## Problem

Partition a linked list around x so nodes with values less than x precede all remaining nodes. Preserve original relative order within both groups.

## Example input/output

head = [1,4,3,2,5,2], x = 3 → [1,2,2,4,3,5]

## Approach

Append nodes to separate less-than and greater-or-equal chains in their input order, terminate the latter, then join them.

## Correctness

Appending retains each group’s original encounter order. Every node is assigned to exactly the group specified by its value; joining places all smaller nodes first, and explicit termination prevents old links forming cycles.

## Complexity

O(n) time; O(1) auxiliary space; output reuses nodes.

## Edge cases

An empty group, empty list, values equal to x, and alternating groups.
