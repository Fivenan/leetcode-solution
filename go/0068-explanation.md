# 68. Text Justification

[LeetCode problem](https://leetcode.com/problems/text-justification/)

## Problem

Pack words greedily into lines of maxWidth characters. Fully justify ordinary lines with extra spaces assigned to leftmost gaps. A one-word line and the final line are left-justified and padded. Each word fits within maxWidth.

## Example

["This","is","an","example","of","text","justification."], width=16 → ["This    is    an","example  of text","justification.  "]

## Approach

Choose the maximal fitting word range using single-space minimum gaps. Distribute all available spaces evenly, assigning the remainder to the first gaps; handle the final line separately.

## Correctness

The packing test accepts exactly the longest prefix that fits. Quotient/remainder distribution gives gap sizes differing by at most one with larger gaps first, and padding makes every line’s length exactly maxWidth.

## Complexity

Time: O(total output characters + word count). Auxiliary space: O(maxWidth) for a line builder, excluding output lines.

## Edge cases

Single-word lines, exact fits, leftover spaces and a final line with several words work. ASCII words make byte length equal display width for this contract.
