# 37. Sudoku Solver

[Official problem](https://leetcode.com/problems/sudoku-solver/)

## Problem

Fill the dots in a 9×9 Sudoku board so every row, column, and 3×3 box contains digits 1–9 exactly once. The given puzzle has exactly one solution; modify it in place.

## Example input/output

The standard puzzle beginning "53..7...." solves with first row "534678912".

## Approach

Maintain row/column/box bit masks and backtrack over empty cells, choosing the cell with fewest legal candidates at each step. Undo failed choices.

## Correctness

Each candidate is absent from all three groups, preserving validity. Any solution must use one of those candidates at the selected cell. Exhaustive backtracking therefore finds the guaranteed solution, and failed branches restore all state.

## Complexity

Worst-case O(E·9ᴱ) time for E empty cells (selection scans remaining cells); O(E) auxiliary recursion/cell storage plus fixed masks; in-place output. Heuristic pruning improves typical puzzles.

## Edge cases

An already solved board and cells with no candidates in a failed branch; use fresh state for repeated method calls.
