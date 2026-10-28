# 81. Search in Rotated Sorted Array II

[Official LeetCode problem](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)

## Problem

Decide whether target occurs in a rotated nondecreasing array that may contain duplicates.

## Example input/output

[2,5,6,0,0,1,2], target 0 → true; target 3 → false.

## Approach

Use modified binary search. When both endpoints equal the midpoint, discard those already-known nontarget endpoints; otherwise identify and test the sorted half.

## Correctness

After checking the midpoint, equal ambiguous endpoints cannot be the target and can be removed safely. Without that ambiguity, the sorted-half bounds select the only half that can contain target. The retained interval therefore always contains every unexcluded possible occurrence.

## Complexity

O(n) worst-case time due to duplicate ambiguity, O(log n) when repeated ambiguity does not occur, and O(1) auxiliary/output space.

## Edge cases

All-equal values, an unrotated array, one element, and empty input are handled. Duplicates prevent a universal logarithmic guarantee.
