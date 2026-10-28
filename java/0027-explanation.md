# 27. Remove Element

[Official problem](https://leetcode.com/problems/remove-element/)

## Problem

Remove all occurrences of val in place and return the remaining length k. The first k values may have any order; the suffix is irrelevant and the array may be empty.

## Example input/output

nums = [3,2,2,3], val = 3 → k = 2, prefix = [2,2]

## Approach

Scan and copy every value unequal to val into the next write position.

## Correctness

After each read, the written prefix contains exactly the nonremoved values of the processed prefix. The write index is therefore the required count.

## Complexity

O(n) time; O(1) auxiliary space and output.

## Edge cases

Empty input, removing everything, and removing nothing.
