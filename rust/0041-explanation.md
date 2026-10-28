# 41. First Missing Positive

[Official LeetCode problem](https://leetcode.com/problems/first-missing-positive/)

## Problem

Find the smallest missing positive integer in an unsorted array using O(n) time and constant extra space.

## Example input/output

[3,4,-1,1] → 2.

## Approach

Use the owned vector as a placement table: repeatedly move each value x in 1..=n to position x−1, stopping on duplicates. Scan for the first misplaced position.

## Correctness

Every swap permanently places at least one previously unplaced value in its own slot, so there are at most n successful swaps. Once placement ends, every present in-range value occupies its slot; the first missing slot is exactly the smallest absent positive.

## Complexity

O(n) time and O(1) auxiliary/output space; the consumed vector is rearranged in place.

## Edge cases

Duplicates stop without cycling. Zeroes, negatives, out-of-range values, and even i32::MIN are ignored before conversion to an index. If 1..n are all present, n+1 is missing.
