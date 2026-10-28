# 5. Longest Palindromic Substring

[Official problem](https://leetcode.com/problems/longest-palindromic-substring/)

## Problem

Return any longest contiguous palindrome in a nonempty string of digits and English letters.

## Example input/output

s = "babad" → "bab" ("aba" is also valid)

## Approach

Use Manacher radii on a virtual sequence alternating separators and characters. Reuse the radius of the reflected center within the current rightmost palindrome, then expand.

## Correctness

Reflection inside a known palindrome guarantees the copied radius up to its right boundary. Explicit comparisons establish every extension. Thus each radius is exact, and the largest radius identifies a longest original substring.

## Complexity

O(n) time; O(n) auxiliary radii; O(n) returned substring. Each successful extension increases the rightmost boundary or finishes a center.

## Edge cases

Odd and even palindromes, one character, repeated characters, and ties. Virtual separators cannot collide with input characters.
