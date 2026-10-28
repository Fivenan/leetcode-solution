# 88. Merge Sorted Array

[Official problem](https://leetcode.com/problems/merge-sorted-array/)

## Problem

Merge the first m valid values of nums1 with n values of nums2 into nums1 in nondecreasing order. nums1 has length m+n and trailing capacity; either valid range may be empty.

## Example input/output

nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 → [1,2,2,3,5,6]

## Approach

Fill nums1 backward, repeatedly taking the larger unmerged tail value. Only remaining nums2 values require copying after one side ends.

## Correctness

The largest unmerged value belongs at the final free slot. Filling backward cannot overwrite unread nums1 values, and the remaining nums1 prefix is already in its final place if nums2 is exhausted.

## Complexity

O(m+n) time; O(1) auxiliary space; in-place output.

## Edge cases

m = 0, n = 0, equal values, and all nums2 values preceding nums1.
