# 27. Remove Element

[LeetCode problem](https://leetcode.com/problems/remove-element/)

## Problem

Remove all occurrences of val in place and return the length k of the retained prefix. The suffix is ignored; retained order is unrestricted.

## Example

[3,2,2,3], val=3 → k=2, prefix [2,2]

## Approach

Scan and copy every retained value into the next free prefix position. This implementation also preserves order.

## Correctness

After each scan step the prefix contains exactly the values from the scanned portion that are not val, establishing the required result when scanning ends.

## Complexity

Time: O(n). Auxiliary space: O(1). Output occupies the input prefix.

## Edge cases

Empty input, removing everything and finding no matching elements work.
