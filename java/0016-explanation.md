# 16. 3Sum Closest

[Official problem](https://leetcode.com/problems/3sum-closest/)

## Problem

Choose three distinct elements whose sum is closest to target and return that sum. The array has at least three elements and the closest answer is unique.

## Example input/output

nums = [-1,2,1,-4], target = 1 → 2

## Approach

Sort and fix one value, then move two pointers according to whether the sum is below or above target, updating the best difference.

## Correctness

For a below-target sum, smaller right endpoints are no closer than the current sum, so advancing the left endpoint is safe. The symmetric argument holds above target. Every potentially better sum is retained.

## Complexity

O(n²) time; O(log n) sorting stack auxiliary space; O(1) output. Input is sorted. Judge bounds keep returned sums in int range.

## Edge cases

Exact target, all negatives, and exactly three elements; differences use long arithmetic.
