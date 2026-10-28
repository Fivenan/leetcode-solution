# 68. Text Justification

[Official LeetCode problem](https://leetcode.com/problems/text-justification/)

## Problem

Greedily pack words into lines of maxWidth characters and fully justify them. Spread extra spaces toward the left; left-justify the final line and single-word lines. Each word fits the positive width.

## Example input/output

["This","is","an","example","of","text","justification."], width 16 → ["This    is    an","example  of text","justification.  "].

## Approach

Take the longest word prefix that fits with one space per gap. For ordinary lines divide total spaces by gap count and give the remainder to leftmost gaps; otherwise use single spaces and trailing padding.

## Correctness

The packing inequality includes exactly the minimum required gaps, so each chosen line is maximally packed. Quotient/remainder distribution produces equal gap sizes differing by at most one, with larger gaps on the left, exactly satisfying justification rules.

## Complexity

O(total input characters + total output characters) time and O(width) temporary line storage, included in O(number of lines·width) output. Original word strings are read, not cloned wholesale.

## Edge cases

Single words, exact-width words, one-line input, and uneven space distribution work. ASCII input makes byte length equal character width.
