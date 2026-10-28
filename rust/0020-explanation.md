# 20. Valid Parentheses

[Official LeetCode problem](https://leetcode.com/problems/valid-parentheses/)

## Problem

Decide whether a string containing only ()[]{} has properly nested and matched brackets.

## Example input/output

"()[]{}" → true; "([)]" → false.

## Approach

Push each opening bracket’s required closing byte. A closing bracket must equal the latest outstanding requirement.

## Correctness

The stack lists exactly the unmatched openings in nesting order. A mismatch violates the innermost required pair; an empty final stack means every opening received its correct closer.

## Complexity

O(n) time and O(n) auxiliary space; O(1) output.

## Edge cases

Premature closing brackets, leftover openings, nested pairs, and the empty string are handled.
