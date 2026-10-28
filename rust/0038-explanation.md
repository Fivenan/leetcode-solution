# 38. Count and Say

[Official LeetCode problem](https://leetcode.com/problems/count-and-say/)

## Problem

Starting with "1", repeatedly describe each maximal run by its count followed by its digit, and return the nth string for positive n.

## Example input/output

n=4 → "1211" because "21" is one 2 followed by one 1.

## Approach

Build each next term by scanning maximal equal-digit runs in the current term.

## Correctness

The scan partitions the current term into exactly its maximal runs, and appends each required count/digit description in order. Induction from the initial term proves the nth result.

## Complexity

O(sum of generated term lengths) time and O(L) peak space for the largest adjacent current/next terms, including the final output. No claim that the result length is linear in n.

## Edge cases

n=1 returns the base term; runs spanning an entire term and alternating digits work.
