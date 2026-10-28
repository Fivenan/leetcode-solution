# 12. Integer to Roman

[Official LeetCode problem](https://leetcode.com/problems/integer-to-roman/)

## Problem

Convert an integer from 1 through 3999 to its canonical Roman numeral.

## Example input/output

1994 → "MCMXCIV".

## Approach

Subtract descending numeral values, including all six subtractive forms, appending each corresponding symbol.

## Correctness

At each decimal place, the largest available token produces its canonical digit encoding, including 4 and 9. Removing that place leaves the lower places to the same rule; concatenation is the canonical numeral.

## Complexity

O(L) time and O(1) auxiliary space besides O(L) output; L is numeral length and is bounded under this contract.

## Edge cases

Subtractive forms such as IV, IX, and CM, exact powers, and 3999 are covered.
