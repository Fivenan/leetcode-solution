# 79. Word Search

[LeetCode problem](https://leetcode.com/problems/word-search/)

## Problem

Find whether a word of English letters can be spelled by orthogonally adjacent cells in a nonempty letter board, without reusing a cell within one spelling.

## Example

[[A,B,C,E],[S,F,C,S],[A,D,E,E]], word="ABCCED" → true

## Approach

Backtrack from every matching start. Temporarily mark a cell with zero while exploring the next letter and restore it before returning, even when a match is found.

## Correctness

A recursive path matches exactly the word prefix and cannot revisit its marked cells. All four legal extensions are explored, so every valid spelling is considered; restoration makes starting positions independent.

## Complexity

Time: O(mn·3^L) conservative bound for word length L after the first step’s four choices. Auxiliary space: O(L) recursion. Board contents are restored; output: O(1).

## Edge cases

Word longer than cell count fails immediately. A one-letter word, repeated letters and attempts to reuse a cell are handled. Zero is a safe marker under the letter-only contract.
