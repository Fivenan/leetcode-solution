# 47. Permutations II

[LeetCode problem](https://leetcode.com/problems/permutations-ii/)

## Problem

Return every distinct permutation of an integer array that may contain duplicate values.

## Example

[1,1,2] → [[1,1,2],[1,2,1],[2,1,1]]

## Approach

Sort and backtrack with used flags. An equal value may be selected only after the preceding equal occurrence has already been used in the current path.

## Correctness

The rule assigns a fixed order to indistinguishable equal occurrences. Every value permutation still has that canonical occurrence ordering, while alternative index orderings that would duplicate it are excluded.

## Complexity

Time: O(n·n!) worst case, less with duplicates. Auxiliary space: O(n), excluding output. Sorting changes input order.

## Edge cases

All values equal produce one result. Negative values and a single element work.
