# 17. Letter Combinations of a Phone Number

[LeetCode problem](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

## Problem

Return all strings formed by choosing one telephone-keypad letter for each input digit. Digits are limited to 2..9; empty input yields no combinations.

## Example

"23" → ["ad","ae","af","bd","be","bf","cd","ce","cf"]

## Approach

Backtrack through the digit positions using a fixed byte buffer. At each position branch over the letters assigned to that digit.

## Correctness

Each recursive level chooses exactly one valid letter for its position. Every possible sequence has a unique path through those choices, so all and only the requested strings are emitted.

## Complexity

Time: O(n·4^n) worst case. Auxiliary space: O(n) recursion and buffer, excluding O(n·4^n) output.

## Edge cases

Empty input, a single digit, and the four-letter keys 7 and 9 are handled.
