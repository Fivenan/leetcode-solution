# 43. Multiply Strings

[Official LeetCode problem](https://leetcode.com/problems/multiply-strings/)

## Problem

Multiply two nonnegative decimal strings without converting the full numbers to integers or using big-integer libraries. Inputs have no leading zeroes except "0".

## Example input/output

"123" × "456" → "56088".

## Approach

Perform grade-school digit multiplication into m+n decimal positions, carrying each partial sum one position to the left.

## Correctness

The product of positions i and j contributes at offset i+j+1, with its tens carry at i+j. Processing from right to left normalizes each affected lower digit before it is finalized; summing every digit product gives the full product.

## Complexity

O(mn) time and O(m+n) auxiliary digit storage, plus O(m+n) output string space.

## Edge cases

Zero returns immediately. Single digits and long carry chains work; each local arithmetic operation fits i32 under the input lengths.
