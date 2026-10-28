# 37. Sudoku Solver

[LeetCode problem](https://leetcode.com/problems/sudoku-solver/)

## Problem

Fill every dot in a 9×9 Sudoku board in place so each row, column and box contains digits 1..9 once. The input guarantees exactly one solution.

## Example

The standard puzzle beginning "53..7...." completes with first row "534678912".

## Approach

Track used digits with bit masks and backtrack over empty cells. Choose the remaining cell with the fewest available digits to reduce branching; undo masks and the cell after a failed trial.

## Correctness

Each trial respects all three Sudoku constraints. Backtracking explores every legal digit for a chosen cell and restores state on failure, so it finds the guaranteed completion without discarding a possible solution.

## Complexity

Time: O(E·9^E) conservative worst-case bound for E empty cells including selection scans; pruning is much faster in practice. Auxiliary space: O(E), fixed board masks plus recursion/cell list. Output is in place.

## Edge cases

An already solved board returns immediately. A cell with no candidates fails its branch. No uniqueness validation is attempted beyond the guaranteed contract.
