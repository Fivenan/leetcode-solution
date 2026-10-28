# 2. Add Two Numbers

[Official problem](https://leetcode.com/problems/add-two-numbers/)

## Problem

Two nonempty linked lists encode nonnegative integers in reverse decimal digit order. Return their sum in the same form; digits are 0–9 and leading zeros are absent except for zero.

## Example input/output

l1 = [2,4,3], l2 = [5,6,4] → [7,0,8]

## Approach

Walk both lists with a carry, appending one digit for each column until both inputs and the carry are exhausted.

## Correctness

At each step the emitted digit and new carry equal the sum of the current decimal column. Induction over columns yields the exact sum.

## Complexity

O(m+n) time; O(1) auxiliary space excluding O(max(m,n)) newly allocated output nodes.

## Edge cases

Unequal lengths, zero, and a final carry.
