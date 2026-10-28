# 20. Valid Parentheses

[Official problem](https://leetcode.com/problems/valid-parentheses/)

## Problem

Given a string consisting only of (), [], and {}, decide whether every closing bracket matches the most recent unmatched opening bracket and all brackets close.

## Example input/output

s = "()[]{}" → true

## Approach

Push opening brackets and require each closing bracket to match the stack top. Accept only with an empty stack.

## Correctness

The stack is exactly the unmatched opening brackets of the processed prefix. A mismatched closer cannot be repaired by later input; an empty final stack means all pairs matched in proper nesting order.

## Complexity

O(n) time; O(n) auxiliary stack space; O(1) output.

## Edge cases

A leading closer, nested pairs, crossed pairs, and unmatched openers.
