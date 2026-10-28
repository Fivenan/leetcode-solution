# 16. 3Sum Closest

[LeetCode problem](https://leetcode.com/problems/3sum-closest/)

## Problem

For an array with at least three elements, return the sum of three distinct positions closest to target. The problem guarantees a unique closest sum.

## Example

[-1,2,1,-4], target = 1 → 2

## Approach

Sort, fix one element, and move suffix pointers according to whether their sum is below or above target. Track the smallest absolute error.

## Correctness

For a fixed left pointer, lowering the right pointer when the sum is too small only worsens it; the symmetric fact holds for a too-large sum. Thus discarded pairs cannot improve on a sum already inspected.

## Complexity

Time: O(n²). Auxiliary space: O(log n) sorting stack. Output: O(1). Input is reordered.

## Edge cases

Exactly three elements, repeated values, and exact matches work. Arithmetic fits Go int under the problem bounds.
