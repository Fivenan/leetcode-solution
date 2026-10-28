# 88. Merge Sorted Array

[Official LeetCode problem](https://leetcode.com/problems/merge-sorted-array/)

## Problem

Merge the first m sorted entries of nums1 with n sorted nums2 entries into nums1, which has capacity and length m+n.

## Example input/output

[1,2,3,0,0,0], m=3; [2,5,6], n=3 → [1,2,2,3,5,6].

## Approach

Fill nums1 backward by repeatedly writing the larger unmerged final value. Stop when nums2 is exhausted because any nums1 prefix is already correctly placed.

## Correctness

The next largest remaining value belongs at the last unfilled slot. That slot is never before any unread nums1 element, so backward writes preserve all data needed for later comparisons.

## Complexity

O(m+n) time and O(1) auxiliary/output space. nums2 is borrowed mutably to match the judge signature but its elements are not changed.

## Edge cases

Either logical input may be empty, duplicates are retained, and placeholder zeroes are ignored beyond m.
