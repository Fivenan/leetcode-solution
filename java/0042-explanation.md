# 42. Trapping Rain Water

[Official problem](https://leetcode.com/problems/trapping-rain-water/)

## Problem

For nonnegative unit-width bar heights, compute the total rainwater trapped between bars.

## Example input/output

height = [0,1,0,2,1,0,1,3,2,1,2,1] → 6

## Approach

Move inward from both ends while retaining left and right maxima. Process the side with smaller current height, adding its known maximum minus current height.

## Correctness

A processed shorter-side bar has a sufficient opposite boundary: either the current opposite height or a previously established larger opposite maximum. Its own-side maximum therefore determines the water above it exactly. Each bar is processed once.

## Complexity

O(n) time; O(1) auxiliary space and output under judge volume bounds.

## Edge cases

Monotone bars, all zeros, a deep basin, and fewer than three bars.
