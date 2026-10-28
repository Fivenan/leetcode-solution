# 88. Merge Sorted Array

[LeetCode problem](https://leetcode.com/problems/merge-sorted-array/)

## Problem

nums1 has length m+n, with its first m entries sorted and the rest reserved. Merge the n sorted entries of nums2 into nums1 in place; reserved zero values are not data.

## Example

nums1=[1,2,3,0,0,0], m=3; nums2=[2,5,6], n=3 → [1,2,2,3,5,6]

## Approach

Fill the destination from right to left, selecting the greater remaining tail value. Stop once nums2 is exhausted.

## Correctness

The largest remaining element belongs at the next free final position. Writing backward never overwrites unread nums1 data; after nums2 is exhausted, remaining nums1 values already occupy their correct prefix positions.

## Complexity

Time: O(m+n). Auxiliary space: O(1). Output is nums1.

## Edge cases

m=0, n=0, duplicates and negative values work. The reserved capacity/length is guaranteed.
