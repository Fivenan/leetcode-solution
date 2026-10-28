# 66. Plus One

[Official LeetCode problem](https://leetcode.com/problems/plus-one/)

## Problem

Add one to a nonempty most-significant-first decimal digit vector representing a nonnegative integer.

## Example input/output

[1,2,3] → [1,2,4]; [9,9] → [1,0,0].

## Approach

Walk backward through trailing nines, setting them to zero. Increment the first smaller digit, or prepend one if every digit carried.

## Correctness

A nine plus incoming carry becomes zero with carry one; any smaller digit consumes the carry and leaves all earlier digits unchanged. Exhausting the vector requires exactly one new leading digit.

## Complexity

O(n) time and O(1) auxiliary state. The consumed vector becomes the O(n) output; inserting a new leading digit may reallocate its backing buffer.

## Edge cases

Zero, a non-nine last digit, and all-nine inputs are supported.
