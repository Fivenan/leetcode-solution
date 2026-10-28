# 84. Largest Rectangle in Histogram

[LeetCode problem](https://leetcode.com/problems/largest-rectangle-in-histogram/)

## Problem

Given nonnegative unit-width histogram bars, return the maximum area of an axis-aligned rectangle entirely under them.

## Example

[2,1,5,6,2,3] → 10

## Approach

Keep nondecreasing-height indices on a stack. A lower incoming bar finalizes each taller popped bar’s rectangle, whose span lies between its preceding stack index and the new index. A final zero height flushes the stack.

## Correctness

When a bar is popped, the incoming bar is its first strictly shorter right boundary; the remaining stack top bounds how far its height can extend left. Every possible limiting height is finalized, including an equal-height representative spanning any equal run.

## Complexity

Time: O(n), since each index is pushed and popped at most once. Auxiliary space: O(n). Output: O(1).

## Edge cases

Equal heights, zero bars, increasing/decreasing heights and empty input are supported. The final sentinel is virtual and never indexed as an input bar.
