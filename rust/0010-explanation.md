# 10. Regular Expression Matching

[Official LeetCode problem](https://leetcode.com/problems/regular-expression-matching/)

## Problem

Match the entire lowercase string against a valid pattern with . (any one character) and * (zero or more of its preceding atom).

## Example input/output

"aab" against "c*a*b" → true.

## Approach

Use dynamic programming over string and pattern prefixes with two rows. A starred atom is either skipped or consumes one matching character while retaining the same pattern prefix.

## Correctness

The empty row accepts exactly patterns reducible to zero starred atoms. For every other state, the recurrence enumerates all possible final matches: one ordinary atom, zero starred copies, or at least one starred copy. Induction on prefix sizes proves the final state.

## Complexity

O((m+1)(n+1)) time and O(n+1) auxiliary space for text length m and pattern length n; O(1) output. For nonempty inputs these simplify to O(mn) time and O(n) space.

## Edge cases

Empty text, chained starred atoms, wildcard atoms, and full-string rejection are covered. Valid-pattern input guarantees * has a preceding atom.
