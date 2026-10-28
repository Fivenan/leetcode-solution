# 6. Zigzag Conversion

[Official LeetCode problem](https://leetcode.com/problems/zigzag-conversion/)

## Problem

Write a string in a downward/upward zigzag over numRows positive rows, then read rows from top to bottom.

## Example input/output

"PAYPALISHIRING", 3 → "PAHNAPLSIIGYIR".

## Approach

Append each character to its current row, reversing direction at the top and bottom, then concatenate the row strings.

## Correctness

The row and direction track exactly the next position in the zigzag. Each character is appended once in its row’s reading order, so concatenating rows yields the required encoding.

## Complexity

O(n+r) time and O(n+r) auxiliary/output storage for n characters and r rows; the early return avoids excessive row allocation.

## Edge cases

One row or at least as many rows as bytes leaves the input unchanged; short inputs and spaces work.
