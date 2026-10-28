# 85. Maximal Rectangle

[LeetCode problem](https://leetcode.com/problems/maximal-rectangle/)

## Problem

Return the area of the largest all-one rectangle in a rectangular binary character matrix. Cells are byte characters zero or one.

## Example

[[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]] → 6

## Approach

For each row, maintain consecutive one heights ending there. Solve that row’s histogram with a monotonic stack and keep the maximum area.

## Correctness

Every all-one rectangle has a bottom row, where its columns’ histogram heights are at least its height. Conversely every histogram rectangle denotes all-one cells above that row. Thus maximizing across histogram solutions is equivalent to the matrix problem.

## Complexity

Time: O(mn). Auxiliary space: O(n) for heights and the stack. Output: O(1).

## Edge cases

Empty input, all zeros, all ones, one row and one column work. Character bytes, rather than numeric zero/one, are required by the signature.
