# 30. Substring with Concatenation of All Words

[Official LeetCode problem](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)

## Problem

Find all start indices where a substring concatenates every given word exactly once, in any order. Words are nonempty and have equal byte length.

## Example input/output

"barfoothefoobarman", ["foo","bar"] → [0,9].

## Approach

For each word-length offset, slide a window in whole-word steps. Track required and observed multiplicities; shrink when the newly added word is overrepresented and reset on an unknown word.

## Correctness

Within a window, every word is known and every multiplicity is at most its required count. A window with exactly the total word count must therefore have every required multiplicity. Removing only overrepresented prefixes cannot discard an unreported valid window ending at the current position.

## Complexity

Expected O((S+W)·L) time for S text bytes, W words, and word length L, accounting for byte-slice hashing/comparison. O(U) map entries for U distinct words plus O(A) output indices; borrowed keys avoid word copies.

## Edge cases

Repeated words, overlapping matches, and a text shorter than the concatenation are supported. Output index order may follow offsets, which the judge allows.
