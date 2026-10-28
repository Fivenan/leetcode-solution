# 31. Next Permutation

[Official LeetCode problem](https://leetcode.com/problems/next-permutation/)

## Problem

Rearrange an array into the next lexicographic permutation in place; wrap the largest permutation to ascending order.

## Example input/output

[1,2,3] → [1,3,2]; [3,2,1] → [1,2,3].

## Approach

Find the longest nonincreasing suffix. Swap its preceding pivot with the rightmost larger value, then reverse the suffix into ascending order.

## Correctness

The suffix is already maximal, so the smallest possible increase must occur at the pivot. Its rightmost larger successor is the smallest eligible replacement. Sorting the remaining suffix minimally completes exactly the next permutation. If no pivot exists, reversing produces the first permutation.

## Complexity

O(n) time and O(1) auxiliary/output space.

## Edge cases

Duplicate values, an entirely descending array, and one element are supported.
