# 54. Spiral Matrix

[Official problem](https://leetcode.com/problems/spiral-matrix/)

## Problem

Return all elements of a nonempty rectangular matrix in clockwise spiral order starting at the top-left corner.

## Example input/output

matrix = [[1,2,3],[4,5,6],[7,8,9]] → [1,2,3,6,9,8,7,4,5]

## Approach

Track the remaining top, bottom, left, and right bounds; emit each perimeter side and shrink its boundary, checking for exhausted rows or columns.

## Correctness

Each side traversal emits one still-unvisited boundary of the remaining rectangle. Shrinking removes precisely those cells, and guards prevent duplicate emission in a final row or column.

## Complexity

O(mn) time; O(1) auxiliary space excluding O(mn) output.

## Edge cases

One row, one column, and odd dimensions with one final center.
