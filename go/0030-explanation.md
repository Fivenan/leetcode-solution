# 30. Substring with Concatenation of All Words

[LeetCode problem](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)

## Problem

All words are nonempty and have the same length. Return every starting index whose substring consists of exactly all words, including duplicate multiplicities, in any order.

## Example

s="barfoothefoobarman", words=["foo","bar"] → [0,9]

## Approach

For each alignment modulo word length, slide a window one word at a time. Reset on unknown words and remove leading words until multiplicities are within the required counts.

## Correctness

The window always contains only known words and no excess copies. Once its word count equals the total required count, all required multiplicities must be exact; each aligned start is considered.

## Complexity

Time: O((n+k)·w) expected with Go string hashing, n text length, k word count and w word length; character hashing costs O(w) per token. Auxiliary space: O(k) map entries, excluding O(a) answer indices. Substrings share storage.

## Edge cases

Repeated words, overlapping matches, unknown tokens and text shorter than the concatenation work. Output order follows alignment scans and is unrestricted.
