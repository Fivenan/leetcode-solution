# 66. Plus One

[Official problem](https://leetcode.com/problems/plus-one/)

## Problem

A nonempty digit array represents a nonnegative decimal integer in most-significant-first order with no leading zeros except zero. Return the digits after adding one.

## Example input/output

digits = [1,2,3] → [1,2,4]

## Approach

Move backward through trailing nines, replacing them with zeros. Increment the first smaller digit or allocate a leading one if all digits were nine.

## Correctness

Adding one carries precisely through the trailing run of nines. The first non-nine absorbs the carry; if none exists, the result needs one additional leading digit.

## Complexity

O(n) time; O(1) auxiliary space excluding a possible O(n) returned allocation. The input may be modified.

## Edge cases

Zero, no carry, multiple trailing nines, and all nines.
