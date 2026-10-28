# 82. Remove Duplicates from Sorted List II

[Official problem](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)

## Problem

From a nondecreasing linked list, remove every node whose value occurs more than once, retaining only values that originally appeared exactly once.

## Example input/output

head = [1,2,3,3,4,4,5] → [1,2,5]

## Approach

Use a dummy predecessor. When the next two values match, advance over the entire equal-value run and unlink it; otherwise advance the predecessor.

## Correctness

Sortedness makes all copies of a value consecutive. Removing a complete repeated run eliminates exactly the duplicated values, while a singleton can safely remain. The processed prefix therefore contains precisely the required unique values.

## Complexity

O(n) time; O(1) auxiliary space; output reuses retained nodes.

## Edge cases

A repeated head/tail run, all duplicates, empty input, and no duplicates.
