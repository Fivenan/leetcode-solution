# 7. Reverse Integer

[LeetCode problem](https://leetcode.com/problems/reverse-integer/)

## Problem

Reverse the decimal digits of a signed 32-bit integer. Return zero if the reversed value does not fit a signed 32-bit integer; do not rely on 64-bit storage.

## Example

123 → 321; -120 → -21

## Approach

Pop digits with remainder and division. Before multiplying the accumulated result by ten, check against the positive and negative 32-bit limits.

## Correctness

Each iteration appends the next least-significant digit, giving reversed order. The precheck is exactly the condition under which the next append would leave the permitted range.

## Complexity

Time: O(d) for d decimal digits. Auxiliary space and output: O(1).

## Edge cases

Zero and trailing zeros work naturally. Go’s signed quotient/remainder preserve the sign. Check the asymmetric minimum -2147483648 boundary.
