# 73. Set Matrix Zeroes

[Official LeetCode problem](https://leetcode.com/problems/set-matrix-zeroes/)

## Problem

Set an entire row and column to zero for every original zero in a nonempty rectangular matrix, modifying it in place with constant extra space.

## Example input/output

[[1,1,1],[1,0,1],[1,1,1]] → [[1,0,1],[0,0,0],[1,0,1]].

## Approach

Store row/column markers in the first column and first row, with two separate flags for those boundaries. Apply markers before zeroing the boundary row and column.

## Correctness

Each interior original zero marks exactly its row and column. Original boundary zeroes are represented by boundary markers plus the flags. Reading all markers before clearing their storage ensures every and only affected cell becomes zero.

## Complexity

O(rows·cols) time and O(1) auxiliary/output space.

## Edge cases

Original zeroes in the first row or column, all-zero input, and 1×n or n×1 matrices work without confusing newly written zeroes with original markers.
