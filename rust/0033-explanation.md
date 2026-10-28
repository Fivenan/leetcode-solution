# 33. Search in Rotated Sorted Array

[Official LeetCode problem](https://leetcode.com/problems/search-in-rotated-sorted-array/)

## Problem

Search for target in a rotated strictly increasing array of distinct values, returning its index or −1 in logarithmic time.

## Example input/output

[4,5,6,7,0,1,2], target 0 → 4.

## Approach

Binary search a half-open interval. At least one side of its midpoint is sorted; test whether target lies within that sorted side before discarding half.

## Correctness

Distinct values make the sorted side unambiguous. Its endpoint inequalities determine whether target can occur there. Each update retains every possible target position and removes the midpoint already checked.

## Complexity

O(log n) time and O(1) auxiliary/output space.

## Edge cases

An unrotated array, a one-element array, absent targets, and an empty array are handled.
