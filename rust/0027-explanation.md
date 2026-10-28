# 27. Remove Element

[Official LeetCode problem](https://leetcode.com/problems/remove-element/)

## Problem

Remove all occurrences of val in place and return the retained prefix length k; values after k are irrelevant.

## Example input/output

[3,2,2,3], val=3 → k=2, prefix [2,2].

## Approach

Scan once, copying each retained element to the next free prefix slot.

## Correctness

The write prefix always contains exactly the non-val elements in the processed input, in order. Since write never exceeds read, copying cannot overwrite unprocessed data.

## Complexity

O(n) time and O(1) auxiliary/output space.

## Edge cases

All removed, none removed, and empty arrays work; preserving order is allowed even though not required.
