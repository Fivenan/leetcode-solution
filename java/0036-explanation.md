# 36. Valid Sudoku

[Official problem](https://leetcode.com/problems/valid-sudoku/)

## Problem

Determine whether the filled cells of a 9×9 Sudoku board obey row, column, and 3×3-box uniqueness. A dot denotes an empty cell; validation does not require proving solvability.

## Example input/output

A board with two 5 values in its first row → false

## Approach

Track digit bit masks for each row, column, and box. Reject a bit already present in any of the three masks.

## Correctness

Every earlier filled cell has set exactly its three corresponding bits. A repeated bit is exactly a duplicate in a required group, so no invalid duplicate can pass and every rejection violates a rule.

## Complexity

O(81) time and O(9) auxiliary space, both constant for this board; O(1) output.

## Edge cases

Empty cells, repeated digits in a box only, and a valid incomplete board.
