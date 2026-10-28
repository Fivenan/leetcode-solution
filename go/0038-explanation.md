# 38. Count and Say

[LeetCode problem](https://leetcode.com/problems/count-and-say/)

## Problem

The first term is "1". Each next term describes consecutive equal-digit runs of the previous term as count followed by digit. Return term n, where n≥1.

## Example

n=4 → "1211", because "21" says one 2 then one 1.

## Approach

Generate terms iteratively, scan each maximal equal run, and append its decimal length and digit to a builder.

## Correctness

Run partitioning visits each digit exactly once and emits the defined description of each maximal run. Induction from the initial term establishes every generated term.

## Complexity

Time: O(sum of generated term lengths). Auxiliary space: O(L) for the previous and next terms, where L is their maximum length; output: final term length.

## Edge cases

n=1 returns "1". Consecutive runs and a final run are processed uniformly.
