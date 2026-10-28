# 72. Edit Distance

[Official LeetCode problem](https://leetcode.com/problems/edit-distance/)

## Problem

Return the minimum insertions, deletions, or replacements needed to transform one lowercase English string into another.

## Example input/output

"horse" → "ros" requires 3 edits.

## Approach

Use rolling-row prefix edit-distance DP over the shorter string. Matching characters retain the diagonal; otherwise choose replacement, deletion, or insertion at cost one.

## Correctness

An optimal edit sequence’s last action is one of those three edits or a free matching pair. Their preceding prefix subproblems are optimal by replacement, so taking their minimum computes exactly each distance.

## Complexity

O((m+1)(n+1)) time and O(min(m,n)+1) auxiliary space; O(1) output. For nonempty inputs the time is O(mn). Swapping owned strings changes no character buffers.

## Edge cases

Either or both strings may be empty; equal strings have zero distance.
