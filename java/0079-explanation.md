# 79. Word Search

[Official problem](https://leetcode.com/problems/word-search/)

## Problem

Decide whether word can be formed by orthogonally adjacent board cells, using each cell at most once per word. Board and word are nonempty and contain English letters.

## Example input/output

board = [[A,B,C,E],[S,F,C,S],[A,D,E,E]], word = "ABCCED" → true

## Approach

Try a depth-first search from every cell. Temporarily mark each used cell with a nonletter sentinel and restore it after exploring the next character.

## Correctness

A search state represents exactly a simple adjacent path matching the consumed prefix. The sentinel prohibits reuse, all four possible next steps are explored, and success at the final character means a complete valid path exists.

## Complexity

O(mn·3ᴸ) worst-case time for word length L (first step has at most four choices); O(min(L,mn)) auxiliary recursion space; O(1) output. Board is restored.

## Edge cases

A one-letter word, repeated letters requiring cell reuse (invalid), and a word longer than the cell count.
