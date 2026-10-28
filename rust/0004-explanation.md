# 4. Median of Two Sorted Arrays

[Official LeetCode problem](https://leetcode.com/problems/median-of-two-sorted-arrays/)

## Problem

Find the median of two sorted arrays in logarithmic time. Their combined length is positive.

## Example input/output

[1,3] and [2] → 2.0; [1,2] and [3,4] → 2.5.

## Approach

Binary search the cut in the shorter array. Choose the other cut so the left half has half the elements, rounded up; use wide sentinels at array ends.

## Correctness

A valid cut has both left maxima no greater than the opposite right minima, so all left elements precede all right elements. If one inequality fails, sorted order determines which direction the first cut must move. The middle one or two boundary values are therefore the median.

## Complexity

O(log(min(m,n)+1)) time and O(1) auxiliary space; O(1) output. Swapping vectors moves their ownership without copying elements.

## Edge cases

Either array may be empty; duplicates, negative numbers, and i32 extremes are supported. Floating-point averaging avoids integer overflow.
