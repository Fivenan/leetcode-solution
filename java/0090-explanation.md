# 90. Subsets II

[Official problem](https://leetcode.com/problems/subsets-ii/)

## Problem

Return every distinct subset of an integer array that may contain duplicate values, including the empty subset.

## Example input/output

nums = [1,2,2] → [[],[1],[1,2],[1,2,2],[2],[2,2]]

## Approach

Sort, emit the current subset at every recursion node, and extend with later indices while skipping equal choices at the same depth.

## Correctness

Every subset has a nondecreasing representation. Duplicate equal choices at one depth represent the same extensions, so keeping only the first preserves completeness and uniqueness while still allowing repeated values at deeper levels.

## Complexity

O(n·2ⁿ) worst-case time and output space; O(n) auxiliary recursion/path space plus sorting stack. Input is sorted.

## Edge cases

All equal values, negative values, and the empty subset.
