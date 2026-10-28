# 3. Longest Substring Without Repeating Characters

[Official problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Problem

Return the maximum length of a contiguous substring with no repeated character. The judge strings contain English letters, digits, symbols, and spaces; the empty string is allowed.

## Example input/output

s = "abcabcbb" → 3

## Approach

Keep a window and an array of last positions. On repetition move the left boundary just past the previous occurrence, never backward.

## Correctness

After processing each right endpoint the window contains no duplicate, and any earlier left boundary would include a repeated character. Its length is therefore the best valid length ending there.

## Complexity

O(n + U) time and O(U) auxiliary space, U = 65,536 Java UTF-16 code units; O(1) result.

## Edge cases

Empty input, all identical characters, and repeats before the current left boundary. Characters are interpreted as Java char values, matching the judge character set.
