# 31. Next Permutation

[LeetCode problem](https://leetcode.com/problems/next-permutation/)

## Problem

Rearrange an integer array in place to the next lexicographic permutation. If it is already last, rearrange it into ascending order. Use constant auxiliary space.

## Example

[1,2,3] → [1,3,2]

## Approach

Find the rightmost ascent, swap its left value with the smallest greater suffix value, then reverse the descending suffix.

## Correctness

Keeping the longest possible prefix minimizes the change. The chosen successor is the least increase at the pivot; ascending the remainder yields the smallest arrangement after that increase. A wholly descending array wraps to the first permutation.

## Complexity

Time: O(n). Auxiliary space: O(1). Output is in place.

## Edge cases

Repeated values, a descending array and a one-element array work; empty input is also harmless.
