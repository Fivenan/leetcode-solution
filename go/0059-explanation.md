# 59. Spiral Matrix II

[LeetCode problem](https://leetcode.com/problems/spiral-matrix-ii/)

## Problem

For positive n, create an n×n matrix containing 1 through n² in clockwise spiral order.

## Example

n=3 → [[1,2,3],[8,9,4],[7,6,5]]

## Approach

Allocate the output and fill the current top, right, bottom and left edges while shrinking the unfilled rectangle and increasing the next value.

## Correctness

Each edge traversal follows the requested clockwise order and fills only unfilled cells. Shrinking boundaries preserve that the interior is exactly the unfilled region, until every integer has been placed once.

## Complexity

Time: O(n²). Auxiliary space: O(1), excluding O(n²) output.

## Edge cases

n=1 fills the center once. Guards prevent a final row or column being filled twice.
