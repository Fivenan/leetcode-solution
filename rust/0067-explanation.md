# 67. Add Binary

[Official LeetCode problem](https://leetcode.com/problems/add-binary/)

## Problem

Add two nonempty binary strings and return their binary sum.

## Example input/output

"11" + "1" → "100".

## Approach

Process both strings from right to left with a one-bit carry, collect low-order result bits, then reverse them into a string.

## Correctness

At each position, sum modulo two is the correct output bit and sum divided by two is the carry into the next position. Once both inputs and carry are exhausted, all bits are complete.

## Complexity

O(m+n) time and O(max(m,n)) temporary reversed-bit storage plus O(max(m,n)) output.

## Edge cases

Unequal lengths, zero, and an additional high carry work. Inputs contain only 0 and 1.
