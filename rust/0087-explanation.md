# 87. Scramble String

[Official LeetCode problem](https://leetcode.com/problems/scramble-string/)

## Problem

Decide whether one lowercase string can be obtained from another by recursively splitting a string into two nonempty parts and optionally swapping them. Length is at most 30.

## Example input/output

"great" and "rgeat" → true; "abcde" and "caebd" → false.

## Approach

Use interval DP indexed by length and both starting positions. For each split test both preserving and swapping the two corresponding child intervals.

## Correctness

Single characters match exactly on equality. Any larger scramble has a first split whose children either keep order or swap; the recurrence tests every such split using already-proven shorter states. Conversely, combining two true child states is a legal scramble operation.

## Complexity

O(n⁴) time and O(n³) auxiliary DP space; O(1) output. Slices are addressed by indices, so recursive substring copies are avoided.

## Edge cases

Equal strings, repeated letters, one-character strings, and different lengths are supported. The defensive empty-string case returns true.
