# 66. Plus One

[LeetCode problem](https://leetcode.com/problems/plus-one/)

## Problem

A nonempty most-significant-first digit array represents a nonnegative integer without unnecessary leading zeros. Return its digits after adding one.

## Example

[1,2,3] → [1,2,4]; [9,9] → [1,0,0]

## Approach

Carry from the last digit: turn each trailing nine into zero and increment the first non-nine. If every digit was nine, allocate a new leading one.

## Correctness

The carry passes exactly through trailing nines. The first smaller digit absorbs it, leaving the preceding digits unchanged; a remaining carry after the first digit adds a new decimal place.

## Complexity

Time: O(n) worst case. Auxiliary space: O(1), excluding a possible O(n) replacement output. The input is mutated.

## Edge cases

Zero increments to one. All nines need a longer output; any earlier returned slice reuses the input.
