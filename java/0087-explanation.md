# 87. Scramble String

[Official problem](https://leetcode.com/problems/scramble-string/)

## Problem

Decide whether equal-length lowercase strings are related by recursively splitting a nonempty string into two nonempty parts and optionally swapping the parts at each split. Length is at most 30.

## Example input/output

s1 = "great", s2 = "rgeat" → true

## Approach

Memoize substring states (start1,start2,length). Equal substrings succeed immediately; differing character multisets fail. Try every split in both unswapped and swapped orientations.

## Correctness

Any scramble has a first split and one of the two child orientations, exactly the recurrence alternatives. Conversely joining two valid child scrambles with that orientation gives a valid parent. Memoization reuses results without changing these exhaustive cases.

## Complexity

O(n⁴) worst-case time: O(n³) states, O(n) scans/splits per state; O(n³) auxiliary memo space and O(n) recursion; O(1) output.

## Edge cases

Identical strings, unequal character counts, repeated letters, and strings that are anagrams but not scrambles.
