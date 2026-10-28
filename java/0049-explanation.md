# 49. Group Anagrams

[Official problem](https://leetcode.com/problems/group-anagrams/)

## Problem

Group lowercase English strings by whether they contain the same letters with the same multiplicities. Empty strings and duplicates are allowed; group order is arbitrary. Each input string has at most 100 characters.

## Example input/output

strs = ["eat","tea","tan","ate","nat","bat"] → groups {eat,tea,ate}, {tan,nat}, {bat}

## Approach

Use a 26-count vector as a fixed-length string key; each count fits a Java char under the 100-character input bound. Append each input string to its group.

## Correctness

Two lowercase strings are anagrams exactly when their 26 frequency counts are equal. The fixed-position key preserves every count without ambiguity, so each map group is exactly one anagram class.

## Complexity

Expected O(T+26n) time for total input characters T and n strings; O(26n) auxiliary key/map space; O(n) output references. Under fixed alphabet this is O(T+n) time and O(n) space.

## Edge cases

Empty strings, repeated strings, and counts above nine where ambiguous concatenated counts would fail.
