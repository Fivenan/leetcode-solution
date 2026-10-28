# 72. Edit Distance

[Official problem](https://leetcode.com/problems/edit-distance/)

## Problem

Return the minimum number of single-character insertions, deletions, and replacements needed to change word1 into word2. Strings contain lowercase letters and may be empty.

## Example input/output

word1 = "horse", word2 = "ros" → 3

## Approach

Use rolling prefix dynamic programming along the shorter string, preserving the old diagonal value before each update.

## Correctness

Equal final characters need no extra edit. Otherwise any optimal final operation is insertion, deletion, or replacement, leaving the corresponding smaller prefix pair; taking one plus their minimum covers all possibilities.

## Complexity

O((m+1)(n+1)) time; O(min(m,n)) auxiliary space; O(1) output.

## Edge cases

An empty word, equal words, and edits at either end.
