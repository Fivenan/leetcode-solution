# 91. Decode Ways

[Official LeetCode problem](https://leetcode.com/problems/decode-ways/)

## Problem

Count decodings of a digit string under 1→A through 26→Z. A zero cannot stand alone, and the final count fits signed 32-bit.

## Example input/output

"226" → 3; "06" → 0.

## Approach

Keep decoding counts for the previous two prefixes. A nonzero final digit extends the previous count; a valid final pair from 10 to 26 extends the two-back count.

## Correctness

Every decoding ends in exactly one digit or two digits, so the two additions are disjoint and exhaustive. Invalid zeroes add no one-digit extension. Capping counts preserves min(i32::MAX,true count), since the recurrence uses only addition and optional terms; the promised bounded final result is exact.

## Complexity

O(n) time and O(1) auxiliary/output space. i64 addition before capping prevents intermediate overflow even for long prefixes followed by invalidating zeroes.

## Edge cases

Leading zeroes, internal zeroes, 10/20, invalid 30, and long dead-end prefixes are handled.
