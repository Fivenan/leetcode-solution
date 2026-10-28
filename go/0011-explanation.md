# 11. Container With Most Water

[LeetCode problem](https://leetcode.com/problems/container-with-most-water/)

## Problem

Choose two of at least two nonnegative vertical heights to maximize width times the smaller height.

## Example

[1,8,6,2,5,4,8,3,7] → 49

## Approach

Start with the widest pair. Record its area and move the pointer with the shorter height inward.

## Correctness

Any narrower pair retaining the shorter boundary has no greater limiting height and smaller width, so it cannot improve this pair. Discarding that boundary cannot discard an unexamined better answer.

## Complexity

Time: O(n). Auxiliary space and output: O(1).

## Edge cases

Zero heights, equal boundaries, and two-element arrays work. The problem’s bounds keep area within Go int.
