# 9. Palindrome Number

[Official LeetCode problem](https://leetcode.com/problems/palindrome-number/)

## Problem

Decide whether a signed 32-bit integer reads the same backward in decimal, without converting it to a string.

## Example input/output

121 → true; -121 → false; 10 → false.

## Approach

Reject impossible signs or trailing zeroes, then reverse only the low-order half of the digits.

## Correctness

When the two halves cross, an even palindrome has equal halves, while an odd palindrome differs only by the middle digit at the end of reversed. These conditions are also sufficient for matching mirrored digits.

## Complexity

O(d) time and O(1) auxiliary/output space.

## Edge cases

Zero is a palindrome. Reversing half the digits avoids full-reversal overflow, including for the maximum i32 input.
