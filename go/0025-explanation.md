# 25. Reverse Nodes in k-Group

[LeetCode problem](https://leetcode.com/problems/reverse-nodes-in-k-group/)

## Problem

Reverse nodes in consecutive groups of k, where 1≤k≤list length. Leave a final shorter group unchanged and do not change node values.

## Example

[1,2,3,4,5], k = 2 → [2,1,4,3,5]

## Approach

First find whether a complete group exists. Reverse its links with the following suffix as the initial previous pointer, connect the old predecessor to its new head, and continue.

## Correctness

A group is changed only after k nodes are confirmed. Local reversal reverses exactly those links and connects to the preserved suffix; the old first node becomes the next predecessor.

## Complexity

Time: O(n), since each complete group is scanned and reversed once. Auxiliary space: O(1). Output reuses nodes.

## Edge cases

k=1, k equal to the whole list, and an incomplete trailing group are supported.
