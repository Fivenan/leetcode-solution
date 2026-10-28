# 23. Merge k Sorted Lists

[Official problem](https://leetcode.com/problems/merge-k-sorted-lists/)

## Problem

Merge k nondecreasing linked lists into one sorted linked list. The array and its lists may be empty.

## Example input/output

lists = [[1,4,5],[1,3,4],[2,6]] → [1,1,2,3,4,4,5,6]

## Approach

Keep each nonempty list head in a min heap. Pop the smallest node, append it, and insert its successor.

## Correctness

Each heap entry is the smallest unmerged node of its list. The minimum entry is therefore the smallest unmerged node globally; induction proves the output sorted and complete.

## Complexity

O(N log(k+1)) time for N nodes; O(k) auxiliary heap space; output reuses nodes.

## Edge cases

Zero lists, empty lists, duplicated values, and one very long list.
