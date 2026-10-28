# 30. Substring with Concatenation of All Words

[Official problem](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)

## Problem

Find every index where a substring is a concatenation of all words, in any order with multiplicity. words is nonempty, each word has the same positive length, and strings use lowercase letters.

## Example input/output

s = "barfoothefoobarman", words = ["foo","bar"] → [0,9]

## Approach

For each word-length offset, slide a window in whole words. Maintain frequencies, reset on unknown words, and shrink when a word is overrepresented.

## Correctness

Each aligned window contains only allowed words without exceeding required counts. A window with exactly the total number of words must have every required multiplicity. Each start belongs to one offset and is examined.

## Complexity

Expected O((n+d)w) time for text length n, word count d, and word length w: building the dictionary hashes d words, and extracting/hashing each aligned length-w substring costs O(w). O(uw) auxiliary map-key storage plus O(u) counts for u distinct words; O(a) output for a matching indices.

## Edge cases

Repeated words, overlapping answers, no match, and a text shorter than the concatenation.
