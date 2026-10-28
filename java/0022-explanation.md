# 22. Generate Parentheses

[Official problem](https://leetcode.com/problems/generate-parentheses/)

## Problem

Return all well-formed strings containing n pairs of parentheses, with 1 ≤ n ≤ 8.

## Example input/output

n = 3 → ["((()))","(()())","(())()","()(())","()()()"]

## Approach

Backtrack with counts of open and closed parentheses. Add an opener below n; add a closer only below the number of openers.

## Correctness

These choices preserve the necessary prefix condition that closers never outnumber openers. Every balanced string obeys that condition and follows one unique branch to n of each bracket.

## Complexity

O(nCₙ) time and output space for Catalan number Cₙ; O(n) auxiliary recursion/path space.

## Edge cases

One pair, fully nested strings, and alternating pairs.
