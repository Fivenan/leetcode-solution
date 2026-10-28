# 13. Roman to Integer

[Official LeetCode problem](https://leetcode.com/problems/roman-to-integer/)

## Problem

Convert a valid canonical Roman numeral representing 1 through 3999 to an integer.

## Example input/output

"MCMXCIV" → 1994.

## Approach

Add each symbol unless it is smaller than the following symbol, in which case subtract it.

## Correctness

Ordinary symbols contribute positively. In each valid subtractive pair, the first contribution is negative and the second positive, giving exactly the pair’s value; summing these pieces gives the numeral’s value.

## Complexity

O(n) time and O(1) auxiliary/output space.

## Edge cases

Single symbols and each subtractive form work. Malformed Roman text is outside the judge contract; the function is not a validator.
