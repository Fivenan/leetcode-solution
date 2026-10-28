# 63. Unique Paths II

[LeetCode problem](https://leetcode.com/problems/unique-paths-ii/)

## Problem

Count right/down paths in a nonempty rectangular grid from top-left to bottom-right, where 1 marks a blocked cell and 0 marks an open one. The answer fits the supplied bound.

## Example

[[0,0,0],[0,1,0],[0,0,0]] → 2

## Approach

Roll a one-row DP. A blocked cell resets its count to zero; an open cell accumulates its above and left counts.

## Correctness

No path may enter an obstacle, so its count is zero. For any open cell, paths from above and left exhaust all possibilities without overlap. Initialization supplies one path to an open start.

## Complexity

Time: O(mn). Auxiliary space: O(n). Output: O(1); input is unchanged.

## Edge cases

A blocked start or destination yields zero. Single rows/columns stop propagating past any obstacle.
