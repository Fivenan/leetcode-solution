# 91. Decode Ways

[LeetCode problem](https://leetcode.com/problems/decode-ways/)

## Problem

Count ways to decode a digit string using 1→A through 26→Z. Zero has no standalone code, and leading-zero groups are invalid. The answer fits signed 32-bit range.

## Example

"226" → 3: [2,2,6], [22,6], [2,26]

## Approach

Use rolling prefix DP. A nonzero final digit extends all decodings of the preceding prefix; a final pair from 10 through 26 extends decodings two positions earlier.

## Correctness

Every valid decoding ends with exactly one or two digits. These disjoint cases are valid precisely under the tested conditions, so adding their prefix counts gives the exact total.

## Complexity

Time: O(n). Auxiliary space and output: O(1).

## Edge cases

Leading zeros, "10", "20", invalid "30", and zero inside a longer sequence are handled. Empty input returns zero defensively.
