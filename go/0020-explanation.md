# 20. Valid Parentheses

[LeetCode problem](https://leetcode.com/problems/valid-parentheses/)

## Problem

A string contains only the six bracket characters. Decide whether every closing bracket matches the most recent unmatched opening bracket and all brackets are closed.

## Example

"([])" → true; "([)]" → false

## Approach

Push opening brackets onto a stack. Each closing bracket must match the stack top, which is then removed.

## Correctness

The stack holds exactly the unmatched opening brackets in nesting order. Matching its top enforces proper nesting; a mismatch or unmatched closing bracket can never be repaired by later input.

## Complexity

Time: O(n). Auxiliary space: O(n). Output: O(1).

## Edge cases

A leading closing bracket, leftover open brackets, mixed nesting and an empty string are handled.
