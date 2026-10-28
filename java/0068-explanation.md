# 68. Text Justification

[Official problem](https://leetcode.com/problems/text-justification/)

## Problem

Pack nonempty words greedily into lines of maxWidth, each word no longer than that positive width. Fully justify all nonfinal lines, distributing extra spaces to left gaps; left-justify final and single-word lines.

## Example input/output

words = ["This","is","an","example","of","text","justification."], maxWidth = 16 → ["This    is    an","example  of text","justification.  "]

## Approach

Find each maximal fitting word range using one mandatory space per gap. For normal lines split remaining spaces evenly with the remainder on the left; otherwise use one space and pad the right.

## Correctness

The range is maximal exactly when the next word would exceed width. Quotient and remainder distribute all required spaces with gap differences at most one and leftmost larger gaps, satisfying the specified formatting rules.

## Complexity

O(T + L·W) time for input character count T, L output lines, width W; O(W) auxiliary line builder excluding O(LW) output.

## Edge cases

A single word, a final line fitting exactly, and uneven gap remainders.
