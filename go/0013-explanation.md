# 13. Roman to Integer

[LeetCode problem](https://leetcode.com/problems/roman-to-integer/)

## Problem

Convert a valid Roman numeral representing 1..3999 to an integer. Input validity is guaranteed.

## Example

"MCMXCIV" → 1994

## Approach

Add each symbol unless the next symbol has a greater value; in that case subtract it.

## Correctness

For ordinary symbols addition is correct. In a subtractive pair the smaller symbol is subtracted and the larger is added, producing the pair’s value. Valid input consists of these cases.

## Complexity

Time: O(n). Auxiliary space and output: O(1), because the symbol map has seven fixed entries.

## Edge cases

A one-symbol numeral and all valid subtractive pairs are supported. This converter does not validate malformed numerals.
