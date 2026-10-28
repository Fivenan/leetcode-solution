# 22. Generate Parentheses

[LeetCode problem](https://leetcode.com/problems/generate-parentheses/)

## Problem

Generate every well-formed string containing n pairs of parentheses, with n positive.

## Example

n = 3 → ["((()))","(()())","(())()","()(())","()()()"]

## Approach

Build a prefix using counts of openings and closings. Add an opening while fewer than n have been used, and a closing only when an unmatched opening exists.

## Correctness

The two guards ensure every prefix can be completed and never closes an absent opening. Every valid string follows exactly one sequence of these allowed choices.

## Complexity

Time: O(n·Cₙ), where Cₙ is the nth Catalan number. Auxiliary space: O(n), excluding O(n·Cₙ) output.

## Edge cases

n=1 produces one pair. The implementation also returns the single empty construction when n=0.
