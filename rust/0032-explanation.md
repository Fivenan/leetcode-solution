# 32. Longest Valid Parentheses

[Official LeetCode problem](https://leetcode.com/problems/longest-valid-parentheses/)

## Problem

Return the length of the longest contiguous well-formed parentheses substring.

## Example input/output

"(()" → 2; ")()())" → 4.

## Approach

Keep unmatched opening indices above a base index that marks the last invalid closing bracket. On a matched close, the current stack top determines the longest valid suffix.

## Correctness

After removing a matched opening, everything after the remaining top up to the current close is balanced. An unmatched close becomes a new barrier that no valid substring may cross. Taking the maximum valid suffix covers the endpoint of every possible answer.

## Complexity

O(n) time and O(n) auxiliary stack space; O(1) output.

## Edge cases

Empty strings, only openings, only closings, nested pairs, and adjacent valid groups are covered.
