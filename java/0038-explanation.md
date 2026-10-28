# 38. Count and Say

[Official problem](https://leetcode.com/problems/count-and-say/)

## Problem

Starting with "1", apply run-length verbalization n-1 times: replace each maximal run by its decimal count followed by its digit. Return term n, for 1 ≤ n ≤ 30.

## Example input/output

n = 4 → "1211"

## Approach

Build each next term by scanning maximal equal-character runs and appending their length and digit.

## Correctness

The scan partitions the current term into exactly its maximal runs, so each emitted count/digit pair is the specified verbalization. Induction from term one proves every generated term.

## Complexity

O(sum of generated term lengths) time; O(L) auxiliary space and O(L) output where L is the largest generated length.

## Edge cases

First term, multiple adjacent runs, and counts written as decimal digits.
