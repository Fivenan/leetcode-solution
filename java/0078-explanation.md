# 78. Subsets

[Official problem](https://leetcode.com/problems/subsets/)

## Problem

Return the power set of an array of distinct integers, including the empty subset. Result order does not matter.

## Example input/output

nums = [1,2,3] → eight subsets including [] and [1,2,3]

## Approach

Start with the empty subset. For each value, copy each existing subset and append that value to form the new half of the power set.

## Correctness

Every subset either excludes the new value (the existing half) or includes it (the copied half). These cases are disjoint and complete, proving the power set by induction.

## Complexity

O(n·2ⁿ) time and output space; O(1) auxiliary scalar bookkeeping beyond the retained output lists. Each copied subset becomes part of the output.

## Edge cases

One value, negative values, and preserving the empty subset.
