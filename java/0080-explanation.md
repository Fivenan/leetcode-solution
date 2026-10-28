# 80. Remove Duplicates from Sorted Array II

[Official problem](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)

## Problem

Compact a nondecreasing array in place so each distinct value appears at most twice. Return the kept prefix length; the suffix is irrelevant.

## Example input/output

nums = [1,1,1,2,2,3] → k = 5, prefix = [1,1,2,2,3]

## Approach

Write a value when fewer than two values have been kept or it differs from the value two positions before the write index.

## Correctness

Sorted order groups equal values. Equality with the value two kept positions back means two copies already exist; otherwise retaining this value cannot exceed two. The written prefix is therefore exactly the allowed occurrences.

## Complexity

O(n) time; O(1) auxiliary space and output.

## Edge cases

Runs of one/two/three or more equal values and arrays shorter than two.
