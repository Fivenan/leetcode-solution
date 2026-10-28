# 32. Longest Valid Parentheses

[Official problem](https://leetcode.com/problems/longest-valid-parentheses/)

## Problem

Return the length of the longest contiguous well-formed parentheses substring. The input contains only opening and closing parentheses and may be empty.

## Example input/output

s = ")()())" → 4

## Approach

Use a stack of unmatched opener indices with a sentinel boundary. A closer pops; if the stack empties, record a new boundary, otherwise measure the valid suffix.

## Correctness

After a matching close, the stack top is the position immediately before the longest valid suffix ending there. An unmatched close becomes a boundary across which no valid substring can pass. Taking the maximum covers all endings.

## Complexity

O(n) time; O(n) auxiliary stack space; O(1) output.

## Edge cases

Empty input, unmatched prefixes/suffixes, and nested versus adjacent valid groups.
