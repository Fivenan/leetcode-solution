# 55. Jump Game

[LeetCode problem](https://leetcode.com/problems/jump-game/)

## Problem

Each element is a nonnegative maximum forward jump length. Starting at index zero of a nonempty array, decide whether the last index is reachable.

## Example

[2,3,1,1,4] → true; [3,2,1,0,4] → false

## Approach

Track the farthest index reachable from all reachable positions scanned so far. Stop with failure if the next position lies beyond that reach.

## Correctness

Every index up to farthest can be reached, since shorter jumps are allowed. A reachable position can extend this interval; if the next index is outside it, no later position can be reached to extend it.

## Complexity

Time: O(n). Auxiliary space and output: O(1).

## Edge cases

One zero-valued element succeeds. A blocking zero before the end fails only when no prior position jumps over it.
