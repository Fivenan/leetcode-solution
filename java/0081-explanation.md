# 81. Search in Rotated Sorted Array II

[Official problem](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)

## Problem

Decide whether target appears in a nondecreasing integer array rotated at an unknown pivot. Duplicate values are allowed.

## Example input/output

nums = [2,5,6,0,0,1,2], target = 0 → true

## Approach

Use rotated-array binary search, but when left, middle, and right values are equal and not target, shrink both endpoints to remove ambiguity.

## Correctness

Unequal boundaries identify a sorted half whose range determines whether target can lie there. Equal ambiguous endpoints can be discarded because neither equals the already-checked target. Every operation preserves any possible occurrence.

## Complexity

O(log n) time when halves are distinguishable; O(n) worst-case time with duplicates; O(1) auxiliary space and output.

## Edge cases

All equal values, one hidden distinct value, and an absent target.
