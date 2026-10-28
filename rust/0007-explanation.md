# 7. Reverse Integer

[Official LeetCode problem](https://leetcode.com/problems/reverse-integer/)

## Problem

Reverse a signed 32-bit integer’s decimal digits. Return zero if the reversed value would overflow; do not use a 64-bit integer.

## Example input/output

123 → 321; -120 → -21.

## Approach

Extract signed remainders and append them using checked i32 multiplication and addition.

## Correctness

After each step, result is the reverse of the digits removed so far. Checked operations reject exactly a prefix that cannot fit; subsequent decimal appending cannot restore a valid final magnitude.

## Complexity

O(d) time and O(1) auxiliary/output space for d decimal digits.

## Edge cases

Zero, trailing zeroes, negatives, and i32::MIN are supported without taking an overflowing absolute value.
