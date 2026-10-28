# 90. Subsets II

[LeetCode problem](https://leetcode.com/problems/subsets-ii/)

## Problem

Return every distinct subset of an integer array that may contain duplicate values, including the empty subset.

## Example

[1,2,2] → [[],[1],[1,2],[1,2,2],[2],[2,2]]

## Approach

Sort and backtrack in increasing index order, emitting the current prefix at every node. Skip equal sibling choices but allow equal values along a deeper path.

## Correctness

Each multiset subset has a canonical sequence choosing the earliest available equal occurrences. This sequence is retained; equal siblings would only create another representation of the same subset and are skipped.

## Complexity

Time: O(n·2^n) worst case including copies. Auxiliary space: O(n), excluding output. Input is sorted in place.

## Edge cases

All equal input still yields each allowed multiplicity once. Empty input yields one empty subset.
