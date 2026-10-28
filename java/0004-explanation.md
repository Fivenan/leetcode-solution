# 4. Median of Two Sorted Arrays

[Official problem](https://leetcode.com/problems/median-of-two-sorted-arrays/)

## Problem

Given two individually sorted integer arrays with at least one element in total, return their combined median. The required running time is logarithmic.

## Example input/output

nums1 = [1,3], nums2 = [2] → 2.0

## Approach

Binary search a partition of the shorter array. The other partition makes the left side contain half the elements; compare the two boundary pairs.

## Correctness

Sortedness means both left partitions precede both right partitions exactly when their boundary inequalities hold. A too-large left boundary moves the first partition left; the opposite inequality moves it right. The valid partition exposes the middle value(s).

## Complexity

O(log(min(m,n)+1)) time; O(1) auxiliary space and output.

## Edge cases

An empty array, uneven lengths, duplicates, and even total length. Average after widening to long.
