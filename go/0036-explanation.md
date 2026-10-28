# 36. Valid Sudoku

[LeetCode problem](https://leetcode.com/problems/valid-sudoku/)

## Problem

Check whether the filled digits of a 9×9 Sudoku board repeat in any row, column or 3×3 box. Cells are digits 1..9 or dot. Do not require that the board be solvable.

## Example

A row starting "55......." makes the board invalid.

## Approach

Maintain nine-bit masks for rows, columns and boxes. Reject a filled cell if its bit has already appeared in any corresponding mask.

## Correctness

Each mask records exactly the digits previously visited in its unit. A repeated bit detects a rule violation, and any duplicate pair is detected at its later cell.

## Complexity

Time: O(81), constant for the fixed board. Auxiliary space: O(1), 27 integer masks. Output: O(1).

## Edge cases

Dots are ignored. A valid partial board need not have a completion. Board shape and cell alphabet are guaranteed.
