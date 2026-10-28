# 12. Integer to Roman

[Official problem](https://leetcode.com/problems/integer-to-roman/)

## Problem

Convert an integer from 1 through 3999 into its canonical Roman numeral using standard subtractive pairs.

## Example input/output

num = 1994 → "MCMXCIV"

## Approach

Process numeral values in descending order, including the six subtractive pairs, emitting each while it fits.

## Correctness

Each decimal place has a unique canonical Roman representation. The descending table chooses its largest available standard token and produces those place representations in order.

## Complexity

O(L) time and O(L) output for numeral length L; O(1) auxiliary space. The bounded domain makes L bounded.

## Edge cases

Subtractive cases 4, 9, 40, 90, 400, 900, and repeated thousands.
