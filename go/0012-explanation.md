# 12. Integer to Roman

[LeetCode problem](https://leetcode.com/problems/integer-to-roman/)

## Problem

Convert an integer from 1 through 3999 to its canonical Roman numeral, using subtractive pairs such as IV and CM.

## Example

1994 → "MCMXCIV"

## Approach

Process Roman values in descending order, explicitly including all six subtractive values, and append a symbol while its value fits.

## Correctness

At each decimal place the ordered table emits exactly the canonical thousands/hundreds/tens/ones representation. Subtractive pairs precede their smaller components, preventing noncanonical runs.

## Complexity

Time and auxiliary/output space: O(1) under the fixed 1..3999 contract; work is proportional to numeral length.

## Edge cases

Values 4, 9, 40, 90, 400 and 900 use subtractive forms; 3999 is the upper boundary.
