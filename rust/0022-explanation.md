# 22. Generate Parentheses

[Official LeetCode problem](https://leetcode.com/problems/generate-parentheses/)

## Problem

Generate all strings containing n properly matched parenthesis pairs.

## Example input/output

n=3 → ["((()))","(()())","(())()","()(())","()()()"].

## Approach

Backtrack with counts of openings and closings. Add an opening while fewer than n exist, and add a closing only when it can match an unmatched opening.

## Correctness

Every generated prefix has close ≤ open ≤ n, so a complete length-2n string is valid. Conversely, every valid string obeys these prefix inequalities, so its next character is always explored, exactly once.

## Complexity

O(n·Cₙ) time including copying Cₙ Catalan outputs, O(n) auxiliary recursion/path space, and O(n·Cₙ) output space.

## Edge cases

n=1 produces one pair. The path string is restored after each branch; cloning occurs only for independent completed outputs.
