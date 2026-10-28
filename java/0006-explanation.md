# 6. Zigzag Conversion

[Official problem](https://leetcode.com/problems/zigzag-conversion/)

## Problem

Write a string in a zigzag across numRows positive rows and read rows from top to bottom. Return that reading.

## Example input/output

s = "PAYPALISHIRING", numRows = 3 → "PAHNAPLSIIGYIR"

## Approach

Append each character to its current row, reversing direction at the first and last rows; concatenate the rows.

## Correctness

The row index follows exactly the descending and ascending diagonals in the specified writing order. Each row buffer therefore contains that row in reading order.

## Complexity

O(n) time; O(n + min(numRows,n)) auxiliary storage including row buffers; O(n) output.

## Edge cases

One row, more rows than characters, and a string of length one.
