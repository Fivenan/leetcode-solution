# 67. Add Binary

[LeetCode problem](https://leetcode.com/problems/add-binary/)

## Problem

Add two nonempty binary strings representing nonnegative integers, with no unnecessary leading zeros. Return the binary sum.

## Example

a="11", b="1" → "100"

## Approach

Add from right to left with a binary carry, append result digits in reverse order, then reverse the buffer.

## Correctness

At each binary column, remainder modulo two is its result digit and division by two is the next carry. Reversal restores most-significant-first order.

## Complexity

Time: O(max(m,n)). Auxiliary buffer and output: O(max(m,n)); no whole-number conversion is used.

## Edge cases

Unequal lengths, zero and a final carry work. The inputs are not modified.
