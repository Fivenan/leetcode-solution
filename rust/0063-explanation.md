# 63. Unique Paths II

[Official LeetCode problem](https://leetcode.com/problems/unique-paths-ii/)

## Problem

Count right/down paths across a nonempty rectangular grid that avoid cells marked 1. The final count fits signed 32-bit.

## Example input/output

[[0,0,0],[0,1,0],[0,0,0]] → 2.

## Approach

Keep one row of path counts, resetting obstacle positions to zero and otherwise adding the left count to the top count.

## Correctness

An obstacle has no valid incoming path; every open cell is reached from the disjoint top or left predecessor cases. Saturating addition preserves min(i32::MAX,true count) at every cell, because truncation commutes with nonnegative addition and obstacle resets. The promised bounded final count is therefore exact even if intermediate counts are enormous.

## Complexity

O(rows·cols) time and O(cols) auxiliary space; O(1) output. Saturation prevents intermediate integer overflow independently of obstacle placement.

## Edge cases

Blocked endpoints yield zero; single rows and columns work. An open region with exponentially many partial paths followed by a blocked destination is safe, despite a final result of zero.
