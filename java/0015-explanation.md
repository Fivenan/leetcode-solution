# 15. 3Sum

[Official problem](https://leetcode.com/problems/3sum/)

## Problem

Return all unique triples of values in an integer array whose sum is zero, using three distinct indices. The result order does not matter.

## Example input/output

nums = [-1,0,1,2,-1,-4] → [[-1,-1,2],[-1,0,1]]

## Approach

Sort the array, fix each distinct first value, and search the remainder with two pointers. Skip repeated endpoint values after finding a triple.

## Correctness

For a fixed first value, a too-small sum cannot be corrected by lowering the right pointer; a too-large sum cannot be corrected by raising the left pointer. Thus pointer moves discard no solution. Duplicate skips retain one representative of each value triple.

## Complexity

O(n²) time; O(log n) sorting stack auxiliary space for primitive sorting; O(k) returned triples. Input is sorted in place.

## Edge cases

All zeros, no solution, duplicate values, and large sums (computed as long).
