# 9. Palindrome Number

[Official problem](https://leetcode.com/problems/palindrome-number/)

## Problem

Determine whether a signed 32-bit integer reads the same forward and backward in decimal, without converting it to a string.

## Example input/output

x = 121 → true

## Approach

Reject negatives and positive numbers ending in zero. Reverse only the lower half of the digits and compare the halves.

## Correctness

Each iteration transfers one low digit to the reversed half. When the halves meet, equal halves characterize an even palindrome; discarding the middle reversed digit handles an odd palindrome.

## Complexity

O(d) time and O(1) auxiliary space and output.

## Edge cases

Zero is a palindrome; negative numbers and nonzero trailing-zero values are not. Half reversal avoids overflow.
