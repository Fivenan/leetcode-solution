# 49. Group Anagrams

[Official LeetCode problem](https://leetcode.com/problems/group-anagrams/)

## Problem

Group lowercase English strings by anagram equivalence. Group and member ordering may be arbitrary.

## Example input/output

["eat","tea","tan","ate","nat","bat"] → groups {eat,tea,ate}, {tan,nat}, {bat}.

## Approach

Count 26 letter frequencies for each string and use the frequency array as a hash-map key; move the owned string into its group.

## Correctness

Two strings are anagrams exactly when every letter count is equal. Therefore identical keys place precisely the anagrams together, and every input is moved into exactly one group.

## Complexity

Expected O(S+26n) time for S total input characters and n strings. O(26G+n) container/key space for G groups, including output string headers; original string buffers are moved, not cloned.

## Edge cases

Empty strings share the zero-count key; repeated equal strings remain repeated members of their group.
