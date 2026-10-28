# 45. Jump Game II

[LeetCode problem](https://leetcode.com/problems/jump-game-ii/)

## Problem

Each nonnegative element is the maximum forward jump length from that index. Return the minimum jumps needed to reach the last index; reachability is guaranteed.

## Example

[2,3,1,1,4] → 2

## Approach

Scan greedy breadth-first layers. Track the current layer’s farthest endpoint and the farthest index reachable by one additional jump; increment the count at each layer boundary.

## Correctness

All indices reachable with the current number of jumps are scanned before committing the next boundary. Their maximum reach is exactly the next reachable layer endpoint, so no smaller jump count could pass the current boundary.

## Complexity

Time: O(n). Auxiliary space and output: O(1).

## Edge cases

A one-element array needs zero jumps. Zero values inside a reachable array are fine; unreachable arrays are outside the contract.
