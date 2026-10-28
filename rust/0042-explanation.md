# 42. Trapping Rain Water

[Official LeetCode problem](https://leetcode.com/problems/trapping-rain-water/)

## Problem

Given nonnegative unit-width bar heights, return the total rainwater trapped between bars.

## Example input/output

[0,1,0,2,1,0,1,3,2,1,2,1] → 6.

## Approach

Move inward from both ends, processing the lower boundary and tracking the maximum already seen on that side.

## Correctness

When processing the lower side, an opposite boundary high enough to support its accumulated side maximum has already been established by the pointer-selection rule. Its water is therefore exactly that side maximum minus its height; the unresolved middle cannot lower this amount. Summing finalized positions gives the total.

## Complexity

O(n) time and O(1) auxiliary/output space.

## Edge cases

Empty or short arrays and monotone heights trap no water. Equal boundaries can process either side; judge bounds keep total in i32.
