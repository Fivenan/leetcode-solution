# 16. 3Sum Closest

[Official LeetCode problem](https://leetcode.com/problems/3sum-closest/)

## Problem

Return the sum of three distinct-index values closest to target. There are at least three values, and the judge guarantees a unique closest answer.

## Example input/output

[-1,2,1,-4], target 1 → 2.

## Approach

Sort, fix one value, and scan the other two with opposing pointers while recording the smallest absolute error.

## Correctness

If the current sum is too small, every smaller right endpoint with the same left endpoint is no better than the recorded sum, so advancing left safely discards that endpoint. The symmetric argument applies to a large sum. Enumerating first indices covers all candidates.

## Complexity

O(n²) time and O(log n) sorting stack auxiliary space; O(1) output.

## Edge cases

Exact matches return immediately. Wide intermediate sums avoid arithmetic overflow; the judge’s bounded values ensure the returned sum fits i32.
