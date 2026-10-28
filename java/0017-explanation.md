# 17. Letter Combinations of a Phone Number

[Official problem](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

## Problem

For a string containing digits 2–9, return all letter strings on the telephone keypad in any order. Empty input returns an empty list.

## Example input/output

digits = "23" → ["ad","ae","af","bd","be","bf","cd","ce","cf"]

## Approach

Backtrack by input position, appending each mapped letter and undoing it before trying the next.

## Correctness

At depth i each partial string represents exactly one choice for the first i digits. Extending by every letter enumerates all and only valid combinations, once each.

## Complexity

O(nK) time and O(nK) output for K combinations; O(n) recursion and path auxiliary space. K ≤ 4ⁿ.

## Edge cases

Empty digits and digits 7/9 with four letters.
