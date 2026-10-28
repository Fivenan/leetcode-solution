# 15. 3Sum

[Official LeetCode problem](https://leetcode.com/problems/3sum/)

## Problem

Return every distinct value triplet from three different indices whose sum is zero.

## Example input/output

[-1,0,1,2,-1,-4] → [[-1,-1,2],[-1,0,1]].

## Approach

Sort the owned array. Fix each distinct first value and use inward-moving pointers to find complement pairs, skipping repeated values after each match.

## Correctness

For a fixed first value, sorted order proves that a sum too small cannot be fixed by moving the right pointer inward, and a sum too large cannot be fixed by moving the left pointer inward. Thus no possible pair is skipped. Duplicate skipping emits each value triplet once.

## Complexity

O(n²) time, O(log n) sorting stack auxiliary space, and O(k) output for k triplets. Sorting mutates the consumed vector.

## Edge cases

All zeroes emit one triplet, duplicates do not repeat output, and wide sum arithmetic avoids i32 overflow.
