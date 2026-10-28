# 87. Scramble String

[LeetCode problem](https://leetcode.com/problems/scramble-string/)

## Problem

A scramble recursively splits a lowercase string into two nonempty parts and optionally swaps them at every split. Decide whether s2 can be produced from s1 this way; lengths are equal and at most 30 in the problem.

## Example

s1="great", s2="rgeat" → true

## Approach

Memoize pairs of equal-length substrings by starting indices and length. Reject unequal character counts; try every split in both unswapped and swapped orientations.

## Correctness

Any nontrivial scramble has a first split with one of the two orientations, followed by independent scrambles of its parts. The recurrence tests exactly those possibilities, while equal strings are immediate successes and unequal multisets cannot scramble.

## Complexity

Time: O(n⁴), with O(n³) states and O(n) split/count work per state. Auxiliary space: O(n³) memoization plus O(n) recursion. Output: O(1).

## Edge cases

Equal strings, a single character, repeated letters and anagram pairs that are not scrambles are handled. Empty equal strings also succeed.
