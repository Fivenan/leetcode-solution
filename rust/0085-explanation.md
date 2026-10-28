# 85. Maximal Rectangle

[Official LeetCode problem](https://leetcode.com/problems/maximal-rectangle/)

## Problem

Return the area of the largest all-1 rectangle in a rectangular matrix of characters 0 and 1.

## Example input/output

[[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]] → 6.

## Approach

For each row, maintain consecutive-one column heights and solve the corresponding largest histogram rectangle with a monotone stack.

## Correctness

Every all-1 rectangle has a bottom row and appears as a rectangle under that row’s heights. Conversely, each histogram rectangle corresponds to consecutive ones in those columns. Taking the maximum across row histograms therefore finds exactly the largest matrix rectangle.

## Complexity

O(rows·cols) time and O(cols) auxiliary heights/stack space; O(1) output. Every histogram index is pushed and popped at most once per row.

## Edge cases

Empty dimensions, all zeroes, all ones, and one row or column work.
