# 58. Length of Last Word

[LeetCode problem](https://leetcode.com/problems/length-of-last-word/)

## Problem

A string contains English letters and spaces and at least one word. Return the length of its last word, a maximal run of non-space characters.

## Example

"   fly me   to   the moon  " → 4

## Approach

Scan backward past trailing spaces, then backward through the final word. The difference between the two stopping positions is its length.

## Correctness

Skipping trailing spaces reaches the final word’s last character. Continuing until a space or the string boundary visits exactly that word and no other characters.

## Complexity

Time: O(n) worst case. Auxiliary space and output: O(1).

## Edge cases

One word, multiple spaces and trailing spaces work. Empty or all-space input also returns zero.
