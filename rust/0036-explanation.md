# 36. Valid Sudoku

[Official LeetCode problem](https://leetcode.com/problems/valid-sudoku/)

## Problem

Check that the filled cells of a 9×9 Sudoku board contain no repeated digit in any row, column, or 3×3 box. Dots are empty; solvability is not required.

## Example input/output

A board with two 5s in one row is invalid.

## Approach

Use one nine-bit digit mask for each row, column, and box; reject a digit already present before setting its bits.

## Correctness

At every visited cell the masks record exactly the earlier filled digits in its three units. An existing bit detects precisely a forbidden duplicate, and no duplicate can pass its second occurrence.

## Complexity

O(81) time and O(27) mask space, both constant for the fixed board; O(1) output.

## Edge cases

An empty board is valid; duplicates in different units are checked independently. Input characters are guaranteed to be dots or digits 1–9.
