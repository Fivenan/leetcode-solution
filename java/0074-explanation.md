# 74. Search a 2D Matrix

[Official problem](https://leetcode.com/problems/search-a-2d-matrix/)

## Problem

Search target in a nonempty rectangular matrix whose rows are nondecreasing and whose first value of each row exceeds the previous row’s last value. Require O(log(mn)) time.

## Example input/output

matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3 → true

## Approach

Treat row-major positions as a single sorted array and binary search, translating midpoint to row and column.

## Correctness

The cross-row and within-row conditions make the flattened sequence sorted. Standard binary-search inequalities discard only positions that cannot equal target; index division/remainder preserve its exact value mapping.

## Complexity

O(log(mn)) time; O(1) auxiliary space and output.

## Edge cases

One row/column, absent values between rows, and first or final element.
