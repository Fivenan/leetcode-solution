# 41. First Missing Positive

[LeetCode problem](https://leetcode.com/problems/first-missing-positive/)

## Problem

Return the smallest absent positive integer from an unsorted array, in O(n) time and O(1) auxiliary space.

## Example

[3,4,-1,1] → 2

## Approach

Place each value x in 1..n at index x-1 by swaps. Ignore out-of-range values and stop when the destination already contains x. Scan for the first incorrectly filled position.

## Correctness

Every swap permanently puts at least one value at its designated position; already placed values are never displaced. If index i lacks i+1 after placement, that value was absent, and all earlier positions certify smaller positives are present.

## Complexity

Time: O(n), because at most n positions become newly correct through swaps. Auxiliary space and output: O(1). Input is rearranged.

## Edge cases

Duplicates cannot cause an infinite loop because destination equality stops swapping. Zero, negatives, large values and all values 1..n are handled.
