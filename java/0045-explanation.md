# 45. Jump Game II

[Official problem](https://leetcode.com/problems/jump-game-ii/)

## Problem

Each nonnegative nums[i] is the maximum forward jump length from index i. Return the fewest jumps to reach the last index; it is guaranteed reachable.

## Example input/output

nums = [2,3,1,1,4] → 2

## Approach

Treat the current reachable interval as one breadth-first layer. Track the farthest index reachable from that layer and increase the jump count at its end.

## Correctness

All indices through the current boundary need at most the current number of jumps. Scanning those indices finds exactly the next-layer boundary. Crossing a boundary therefore adds one necessary and sufficient jump.

## Complexity

O(n) time; O(1) auxiliary space and output.

## Edge cases

One element needs zero jumps; zeros within a reachable array and jumps beyond the final index.
