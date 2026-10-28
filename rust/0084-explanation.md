# 84. Largest Rectangle in Histogram

[Official LeetCode problem](https://leetcode.com/problems/largest-rectangle-in-histogram/)

## Problem

Find the largest axis-aligned rectangle under a histogram of nonnegative unit-width bar heights.

## Example input/output

[2,1,5,6,2,3] → 10.

## Approach

Keep indices of nondecreasing heights. A smaller incoming bar closes taller candidates; pop each and compute its widest interval using the new stack top. A final zero flushes remaining positive bars.

## Correctness

When a height is popped, the current index is its first strictly lower right boundary; the remaining stack top supplies a lower-or-equal left boundary. Equal heights can remain, but the earliest equal candidate eventually spans the full interval. Every maximal rectangle has a limiting bar evaluated this way.

## Complexity

O(n) time because every index is pushed and popped once, O(n) auxiliary stack space, and O(1) output.

## Edge cases

Zero heights, equal plateaus, monotone arrays, and empty input work. The sentinel index is appended only after all height reads are finished.
