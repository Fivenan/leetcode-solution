# 5. Longest Palindromic Substring

[Official LeetCode problem](https://leetcode.com/problems/longest-palindromic-substring/)

## Problem

Return any longest palindromic substring of a nonempty alphanumeric ASCII string.

## Example input/output

"babad" → "bab" ("aba" is also valid).

## Approach

Use Manacher’s algorithm on a sequence alternating negative separators and ASCII byte values. Reuse the mirror radius inside the rightmost known palindrome, then expand only beyond what is already established.

## Correctness

Reflection within a known palindrome guarantees the mirrored radius up to its right boundary. Beyond that boundary explicit comparisons extend the palindrome until its maximal span is known. Thus every center receives its true maximal radius; in this representation the radius equals its original substring length, and the largest radius yields a longest palindrome.

## Complexity

O(n) time: successful comparisons beyond reused radii advance the global right boundary, and there is at most one failing comparison per center. O(n) auxiliary transformed/radius space and O(n) worst-case output space.

## Edge cases

The transformed separators support even and odd lengths uniformly. Empty input, a single character, repeated characters, and tied maxima work. ASCII input ensures byte offsets are valid string boundaries.
