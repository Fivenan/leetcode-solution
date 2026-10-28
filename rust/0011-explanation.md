# 11. Container With Most Water

[Official LeetCode problem](https://leetcode.com/problems/container-with-most-water/)

## Problem

Choose two vertical lines from an array of at least two nonnegative heights to maximize contained area.

## Example input/output

[1,8,6,2,5,4,8,3,7] → 49.

## Approach

Start at both ends. Record their area and move the shorter boundary inward.

## Correctness

Any pair retaining the shorter boundary while shrinking the width has area no larger than the current pair. Discarding that boundary cannot lose an improvement; repeating examines a sufficient sequence of candidates.

## Complexity

O(n) time and O(1) auxiliary/output space.

## Edge cases

Equal heights can discard either boundary; zero heights and the minimum length work. Judge limits keep the area in i32.
