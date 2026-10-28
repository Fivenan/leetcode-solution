# 11. Container With Most Water

[Official problem](https://leetcode.com/problems/container-with-most-water/)

## Problem

Given at least two nonnegative heights, choose two vertical lines maximizing width times the shorter height.

## Example input/output

height = [1,8,6,2,5,4,8,3,7] → 49

## Approach

Start at both ends, record the area, and move the shorter endpoint inward.

## Correctness

With the shorter endpoint fixed, every inward partner has smaller width and cannot increase the limiting height. That endpoint can be discarded after its widest pair is considered.

## Complexity

O(n) time; O(1) auxiliary space and output under judge area bounds.

## Edge cases

Equal heights, zero heights, and the best pair spanning the full array.
