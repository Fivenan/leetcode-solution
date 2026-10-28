# 31. Next Permutation

[Official problem](https://leetcode.com/problems/next-permutation/)

## Problem

Rearrange the array into the next lexicographically greater permutation in place. If no greater permutation exists, produce ascending order; duplicates are allowed.

## Example input/output

nums = [1,2,3] → [1,3,2]

## Approach

Find the rightmost ascent, swap its first value with the rightmost larger suffix value, and reverse the descending suffix.

## Correctness

The descending suffix is already its maximum arrangement, so the rightmost ascent is the latest position that can increase. Swapping with the smallest larger suffix value minimizes that increase, and reversing minimizes the remaining suffix.

## Complexity

O(n) time; O(1) auxiliary space; in-place output.

## Edge cases

Descending input, equal values, one element, and duplicate successors.
