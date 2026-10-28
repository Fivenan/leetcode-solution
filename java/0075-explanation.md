# 75. Sort Colors

[Official problem](https://leetcode.com/problems/sort-colors/)

## Problem

Sort an array containing only 0, 1, and 2 in place, without a library sorting function, so equal colors are adjacent in that order.

## Example input/output

nums = [2,0,2,1,1,0] → [0,0,1,1,2,2]

## Approach

Use Dutch-national-flag partitions: a zero prefix, one middle, unknown region, and two suffix. Swap zeros left and twos right while scanning unknowns.

## Correctness

The partition invariant holds initially and after each operation. A moved-in value from the right remains unclassified, so it is rechecked; when no unknown cells remain the three ordered regions cover the array.

## Complexity

O(n) time; O(1) auxiliary space; in-place output.

## Edge cases

All one color, a two moved over another two, and mixed extremes.
