# 4. Median of Two Sorted Arrays

[LeetCode problem](https://leetcode.com/problems/median-of-two-sorted-arrays/)

## Problem

Given two sorted arrays with at least one element overall, return their combined median in logarithmic time. Inputs need not have equal lengths.

## Example

[1,3] and [2] → 2.0

## Approach

Binary-search a cut in the shorter array; derive the other cut so the left half has ceil((m+n)/2) elements. Adjust until every left element is at most every right element.

## Correctness

Sorted order means only the two values bordering each cut can violate the partition. Their inequalities determine the direction of the search. A valid partition exposes exactly the middle element or middle pair.

## Complexity

Time: O(log(min(m,n)+1)). Auxiliary space: O(1); the optional initial swap uses one recursive call. Output: O(1).

## Edge cases

One empty array, odd/even total lengths and repeated values work. Both arrays empty are outside the contract.
