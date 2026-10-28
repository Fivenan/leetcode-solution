# 55. Jump Game

[Official LeetCode problem](https://leetcode.com/problems/jump-game/)

## Problem

Decide whether the final index of a nonempty array is reachable from index 0 using jumps of length at most the current nonnegative value.

## Example input/output

[2,3,1,1,4] → true; [3,2,1,0,4] → false.

## Approach

Scan from left to right while tracking the farthest index reachable from any processed reachable position.

## Correctness

All indices up to farthest are reachable because jumps can use any smaller length. If the next index exceeds farthest, no earlier position can cross that gap. Otherwise its reach can safely extend the invariant.

## Complexity

O(n) time and O(1) auxiliary/output space.

## Edge cases

A single zero is already at the destination. Internal zeroes matter only when they close the entire reachable frontier.
