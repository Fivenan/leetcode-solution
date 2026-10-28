# 2. Add Two Numbers

[Official LeetCode problem](https://leetcode.com/problems/add-two-numbers/)

## Problem

Add two nonempty reverse-order linked lists of decimal digits and return the sum in the same form.

## Example input/output

[2,4,3] + [5,6,4] → [7,0,8].

## Approach

Consume one node from each owned input per position. Append the sum digit and retain the carry for the next position.

## Correctness

Before each iteration, the output contains exactly the processed low-order digits and carry is their overflow. Decimal division preserves this invariant; consuming all digits and carry gives the full sum.

## Complexity

O(m+n) time, O(1) auxiliary state, and O(max(m,n)) newly allocated output nodes. Input nodes are consumed and dropped; no output node is shared.

## Edge cases

Unequal lengths, zero lists, and a final carry are handled by the loop condition.
