# 79. Word Search

[Official LeetCode problem](https://leetcode.com/problems/word-search/)

## Problem

Determine whether a nonempty English-letter word can be traced through orthogonally adjacent board cells without reusing a cell.

## Example input/output

[[A,B,C,E],[S,F,C,S],[A,D,E,E]], "ABCCED" → true; "ABCB" → false.

## Approach

Start a depth-first search from every cell. Temporarily replace each selected letter with # during that path, explore neighboring cells, then restore it even after success.

## Correctness

Each search path spells exactly its matched prefix, and marking prevents cell reuse. Every legal next cell is explored, so every valid trace is considered. Restoration makes branches and later starting cells independent.

## Complexity

O(R·C·3^L) as a loose bound for word length L after a first step with at most four choices; O(L) auxiliary recursion space and O(1) output. The owned board is reused as visitation state.

## Edge cases

A one-letter word, repeated letters, absent letters, and words longer than the cell count are handled. # is safe because judge cells contain only English letters.
