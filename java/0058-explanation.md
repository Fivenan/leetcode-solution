# 58. Length of Last Word

[Official problem](https://leetcode.com/problems/length-of-last-word/)

## Problem

Return the length of the last word in a string containing English letters and spaces. At least one word exists; a word is a maximal sequence of nonspace characters.

## Example input/output

s = "Hello World" → 5

## Approach

Skip trailing spaces, then count backward until a space or the beginning.

## Correctness

After skipping trailing spaces, the current character is the last letter of the last word. The consecutive nonspace suffix ending there is exactly that word.

## Complexity

O(n) worst-case time; O(1) auxiliary space and output.

## Edge cases

Trailing spaces, multiple spaces between words, and a single word.
