# 75. Sort Colors

[LeetCode problem](https://leetcode.com/problems/sort-colors/)

## Problem

Sort an array containing only 0,1,2 in place, grouping the three colors without calling a sort function.

## Example

[2,0,2,1,1,0] → [0,0,1,1,2,2]

## Approach

Use Dutch national flag partitioning: zeros before low, ones from low to mid, unknowns from mid to high, and twos after high.

## Correctness

Each branch moves one examined value into its correct partition. A swapped-in value from high remains unknown, so mid stays put in the two case. The unknown interval shrinks each iteration until all values are classified.

## Complexity

Time: O(n), one pass. Auxiliary space: O(1). Output is in place.

## Edge cases

All one color, a single element, reversed groups and empty input work. Values outside 0..2 are outside the contract.
