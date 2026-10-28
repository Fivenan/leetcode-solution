# 69. Sqrt(x)

[Official problem](https://leetcode.com/problems/sqrtx/)

## Problem

Return floor(sqrt(x)) for nonnegative signed 32-bit x without built-in exponentiation or square-root functions.

## Example input/output

x = 8 → 2

## Approach

Binary search the answer between zero and min(x,46340), comparing the squared midpoint using long arithmetic.

## Correctness

Squaring is monotone for nonnegative candidates. A square at most x is a feasible lower answer and permits searching higher; an excessive square excludes that candidate and all larger ones. The final feasible bound is the floor root.

## Complexity

O(log(x+1)) time; O(1) auxiliary space and output.

## Edge cases

Zero, one, perfect squares, and Integer.MAX_VALUE.
