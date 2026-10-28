# 63. Unique Paths II

[Official problem](https://leetcode.com/problems/unique-paths-ii/)

## Problem

Count right/down paths across a nonempty rectangular grid where 1 marks blocked cells and 0 marks open cells. A blocked start or finish permits no paths; the answer fits int.

## Example input/output

obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]] → 2

## Approach

Use one rolling DP row, resetting blocked cells to zero and adding the current left count to the previous-row count for open cells. Counts saturate at Integer.MAX_VALUE, avoiding overflow even on large dead-end branches.

## Correctness

Blocked cells admit no paths. Every open cell receives exactly the disjoint paths from above and left; the rolling array retains those two values when updated. A count above the cap cannot reach the destination under the promised final bound; otherwise every path to that cell could extend to a distinct destination path. Saturation therefore preserves the returned answer.

## Complexity

O(mn) time; O(n) auxiliary space; O(1) output.

## Edge cases

Blocked origin or destination, one column, and a wall that disconnects the grid.
