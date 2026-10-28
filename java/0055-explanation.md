# 55. Jump Game

[Official problem](https://leetcode.com/problems/jump-game/)

## Problem

Each nonnegative array value is the maximum forward jump length from its index. Decide whether the last index is reachable from index zero.

## Example input/output

nums = [2,3,1,1,4] → true

## Approach

Track the farthest reachable position. A scan index beyond that frontier proves failure; otherwise extend the frontier with its jump length.

## Correctness

All processed reachable positions can reach no farther than the tracked maximum, and each extension comes from a reachable position. A gap beyond it is impossible to cross; reaching the end proves existence of a path.

## Complexity

O(n) time; O(1) auxiliary space and output.

## Edge cases

One element, an impassable zero, and a jump directly past the last position.
