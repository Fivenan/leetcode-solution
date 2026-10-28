# 6. Zigzag Conversion

[LeetCode problem](https://leetcode.com/problems/zigzag-conversion/)

## Problem

Place the supplied English-letter/punctuation string in a down-and-up zigzag with numRows ≥ 1, then read rows from top to bottom.

## Example

"PAYPALISHIRING", numRows = 3 → "PAHNAPLSIIGYIR"

## Approach

Append characters to row buffers while moving a row cursor down or up. Reverse direction at the top and bottom rows, then concatenate the buffers.

## Correctness

The cursor follows exactly the zigzag’s row sequence. Each buffer therefore contains its row in left-to-right order, and concatenating rows gives the requested readout.

## Complexity

Time: O(n+r), with r≤n after the early return. Auxiliary space: O(n+r), including row buffers, plus O(n) output.

## Edge cases

One row and at least as many rows as characters leave the string unchanged.
