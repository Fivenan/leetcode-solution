# 21. Merge Two Sorted Lists

[Official problem](https://leetcode.com/problems/merge-two-sorted-lists/)

## Problem

Merge two nondecreasing singly linked lists by splicing their nodes into one nondecreasing list. Either input may be empty.

## Example input/output

list1 = [1,2,4], list2 = [1,3,4] → [1,1,2,3,4,4]

## Approach

Repeatedly append the smaller current head to a dummy-headed output, then append the unexhausted suffix.

## Correctness

Each chosen head is no larger than any remaining element of either sorted list. Appending the remaining sorted suffix preserves order and includes each node once.

## Complexity

O(m+n) time; O(1) auxiliary space; output reuses input nodes.

## Edge cases

Two empty lists, one empty list, ties, and unequal lengths.
