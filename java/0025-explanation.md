# 25. Reverse Nodes in k-Group

[Official problem](https://leetcode.com/problems/reverse-nodes-in-k-group/)

## Problem

Reverse linked-list nodes in consecutive groups of k, where k is positive and no larger than the list length. Leave a final shorter group unchanged; do not change values.

## Example input/output

head = [1,2,3,4,5], k = 2 → [2,1,4,3,5]

## Approach

Look ahead k nodes before modifying a group. Reverse its links toward the next group, attach its new head, and advance the group predecessor.

## Correctness

Lookahead guarantees only complete groups are reversed. Reversal preserves the suffix pointer and makes the old group head its tail; connecting that tail and new head maintains the correct processed prefix.

## Complexity

O(n) time; O(1) auxiliary space; output reuses nodes.

## Edge cases

k = 1, one complete group, and an incomplete last group.
