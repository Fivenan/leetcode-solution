# 13. Roman to Integer

[Official problem](https://leetcode.com/problems/roman-to-integer/)

## Problem

Convert a valid canonical Roman numeral representing 1 through 3999 to an integer.

## Example input/output

s = "MCMXCIV" → 1994

## Approach

Add each symbol unless it is smaller than its immediate successor, in which case subtract it.

## Correctness

In a valid Roman numeral, the only increasing adjacent symbols are subtractive pairs. Negating the first and adding the second gives each pair its specified value; all other symbols add normally.

## Complexity

O(n) time; O(1) auxiliary space and output.

## Edge cases

Single symbols, subtractive pairs, and mixed additive/subtractive notation. Input validity is guaranteed.
