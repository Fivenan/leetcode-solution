# 2. Add Two Numbers

[LeetCode problem](https://leetcode.com/problems/add-two-numbers/)

## Problem

Two nonempty linked lists encode nonnegative integers in reverse decimal digit order. Return their sum in the same representation; each node stores a digit.

## Example

[2,4,3] + [5,6,4] → [7,0,8]

## Approach

Add corresponding digits with a carry. A dummy head makes appending each result digit uniform.

## Correctness

At each position the emitted digit is the current column sum modulo 10, and carry is its quotient by 10. This is ordinary decimal addition, including a final carry node.

## Complexity

Time: O(max(m,n)). Auxiliary space: O(1), excluding O(max(m,n)) newly allocated output nodes.

## Edge cases

Unequal lengths, zero, and a carry beyond the longer list are handled by the loop condition.
