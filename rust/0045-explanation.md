# 45. Jump Game II

[Official LeetCode problem](https://leetcode.com/problems/jump-game-ii/)

## Problem

Return the minimum jumps needed to reach the final index from index 0, where each nonnegative entry is the maximum jump length. The final index is guaranteed reachable.

## Example input/output

[2,3,1,1,4] → 2.

## Approach

Scan reachable indices in breadth-first layers. Track the farthest position reachable with one more jump, and increment the jump count when the current layer ends.

## Correctness

All indices up to end are reachable within the current jump count. Scanning that layer computes the maximum reach of exactly one additional jump; no smaller number can reach beyond the old boundary. Layer counting therefore gives the minimum.

## Complexity

O(n) time and O(1) auxiliary/output space.

## Edge cases

One element needs zero jumps. Zero entries inside a reachable region are harmless. Reachability is a precondition, not an inferred property of arbitrary input.
