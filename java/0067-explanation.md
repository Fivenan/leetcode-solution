# 67. Add Binary

[Official problem](https://leetcode.com/problems/add-binary/)

## Problem

Add two nonempty binary strings without leading zeros except zero and return their binary sum.

## Example input/output

a = "1010", b = "1011" → "10101"

## Approach

Scan both strings backward with a carry, append low result bits, and reverse the final buffer.

## Correctness

Each iteration computes exactly one binary column and propagates its quotient-by-two carry. Once inputs and carry are exhausted all columns are complete.

## Complexity

O(m+n) time; O(max(m,n)) auxiliary result-building buffer and O(max(m,n)) returned string; O(1) scalar space.

## Edge cases

Zero, different lengths, and a carry creating a new leading bit.
