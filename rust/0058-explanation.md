# 58. Length of Last Word

[Official LeetCode problem](https://leetcode.com/problems/length-of-last-word/)

## Problem

Return the length of the final word in an English-letter and space string containing at least one word.

## Example input/output

"   fly me   to   the moon  " → 4.

## Approach

Scan backward, skip trailing spaces, then count bytes until the previous space or beginning.

## Correctness

After trailing spaces are skipped, the next maximal nonspace run is exactly the last word. Counting that run therefore gives its length.

## Complexity

O(n) worst-case time and O(1) auxiliary/output space.

## Edge cases

Trailing or repeated spaces, a single word, and a one-letter word work. English letters are single bytes.
