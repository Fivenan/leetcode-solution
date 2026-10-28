# 41. First Missing Positive

[Official problem](https://leetcode.com/problems/first-missing-positive/)

## Problem

Return the smallest missing positive integer from an unsorted array of signed integers, in O(n) time and O(1) auxiliary space.

## Example input/output

nums = [3,4,-1,1] → 2

## Approach

Place each value v in 1..n at index v-1 using swaps, stopping when that destination already holds v. Scan for the first misplaced position.

## Correctness

Each successful swap permanently places a distinct useful value in its home slot, so there are at most n such swaps. A positive v is present exactly when its home slot contains v after placement; the first empty home is the smallest missing value.

## Complexity

O(n) time; O(1) auxiliary space and output. The input is permuted.

## Edge cases

Duplicates, negative values, zero, values above n, and a complete 1..n range.
