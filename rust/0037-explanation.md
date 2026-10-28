# 37. Sudoku Solver

[Official LeetCode problem](https://leetcode.com/problems/sudoku-solver/)

## Problem

Fill a valid 9×9 Sudoku puzzle in place. The judge guarantees exactly one solution.

## Example input/output

A solved board with its top-left 5 replaced by . is restored to the solved board.

## Approach

Backtrack over empty cells using row, column, and box masks. Choose the remaining cell with the fewest legal digits, try each digit, and undo its mask changes on failure.

## Correctness

Masks permit exactly digits consistent with all assignments so far. Every possible solution must choose one legal digit for the selected cell, so exploring all choices is complete. Failed branches restore board and masks; a completed assignment satisfies every unit and preserves all clues.

## Complexity

For E empty cells, a loose bound is O(E·9^E) time because each recursive state scans remaining cells. O(E) auxiliary positions and recursion space plus constant masks; the board is the output. The heuristic reduces search in practice without changing the worst-case guarantee.

## Edge cases

Already solved boards return immediately. Dead-end cells stop a branch. Digit bits are undone only when set by that branch, avoiding ownership or aliasing issues.
