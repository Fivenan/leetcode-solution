# 32. Longest Valid Parentheses

[LeetCode problem](https://leetcode.com/problems/longest-valid-parentheses/)

## Problem

Return the length of the longest contiguous well-formed parentheses substring. The string contains only parentheses.

## Example

")()())" → 4

## Approach

Keep unmatched opening indices above a sentinel marking the last invalid boundary. On a closing bracket, pop; if a boundary remains, its distance gives the longest valid suffix.

## Correctness

After a match, indices above the boundary are unmatched openings. The position after the top is exactly the earliest start of a valid suffix ending here. An unmatched closing bracket resets the boundary.

## Complexity

Time: O(n). Auxiliary space: O(n). Output: O(1). A bidirectional counter alternative uses O(1) space.

## Edge cases

Empty input, all opening brackets, unmatched closings and nested/adjacent valid groups are handled.
