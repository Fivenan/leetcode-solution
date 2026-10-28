# 3. Longest Substring Without Repeating Characters

[Official LeetCode problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Problem

Find the length of the longest substring without repeated characters. LeetCode input consists of English letters, digits, symbols, and spaces (ASCII).

## Example input/output

"abcabcbb" → 3.

## Approach

Maintain a sliding window and each byte’s last position plus one. Move the left boundary past the previous occurrence when necessary.

## Correctness

After updating left, the window ends at the current byte and contains no duplicate; any earlier starting point would repeat that byte or an already excluded character. Taking the largest such window finds the optimum.

## Complexity

O(n) time and O(1) auxiliary space (256 positions); O(1) output.

## Edge cases

Empty strings return zero; a boundary never moves backward. Byte indexing relies on the ASCII contract, not arbitrary Unicode scalar values.
