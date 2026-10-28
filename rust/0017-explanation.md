# 17. Letter Combinations of a Phone Number

[Official LeetCode problem](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

## Problem

Return every telephone keypad letter combination for a string of digits 2 through 9. Empty input has no combinations.

## Example input/output

"23" → ["ad","ae","af","bd","be","bf","cd","ce","cf"].

## Approach

Build combinations one digit at a time by extending every existing prefix with every letter on that digit’s key.

## Correctness

Inductively, the current collection contains each legal prefix exactly once. Appending all possible next letters forms every legal longer prefix exactly once, which proves the final collection.

## Complexity

O(d·4^d) worst-case time and storage, including output, for d digits. Prefix cloning constructs independent output strings and is proportional to their lengths.

## Edge cases

Empty input returns an empty vector; keys 7 and 9 have four choices.
