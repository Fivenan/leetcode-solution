# 43. Multiply Strings

[LeetCode problem](https://leetcode.com/problems/multiply-strings/)

## Problem

Multiply two nonnegative decimal strings without converting the whole inputs to integers or using a big-integer library. Inputs have no leading zeros unless they are "0".

## Example

"123" × "456" → "56088"

## Approach

Use grade-school digit multiplication into an m+n digit array. For each digit pair accumulate its product into its place, keeping a digit and carrying to the preceding place.

## Correctness

Each digit pair contributes to decimal place i+j+1 with its carry at i+j. Processing from right to left normalizes places before they are finalized, so the resulting digits represent the exact product.

## Complexity

Time: O(mn). Auxiliary space: O(m+n) for the digit array, plus O(m+n) output.

## Edge cases

Zero, one-digit multiplication and long carry chains work. Product length never exceeds m+n.
