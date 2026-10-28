# 5. Longest Palindromic Substring

[LeetCode problem](https://leetcode.com/problems/longest-palindromic-substring/)

## Problem

Return any longest contiguous palindrome from a string of English letters and digits.

## Example

s = "cbbd" → "bb"

## Approach

Use Manacher’s algorithm over virtual positions that alternate separators and original characters. Keep each center’s palindrome radius and the rightmost known palindrome; initialize a new radius from its mirrored center, capped at the known right boundary, then expand only where needed.

## Correctness

Inside the rightmost palindrome, reflection guarantees the mirrored radius up to that palindrome’s boundary. Expansion then finds the exact maximal radius at the new center. Every odd and even original palindrome corresponds to a virtual center; the largest virtual radius is its original character length, and (center-radius)/2 is its start.

## Complexity

Time: O(n), because copied mirror radii avoid rescanning known interiors and successful boundary expansions advance the rightmost boundary only O(n) times. Auxiliary space: O(n) radii. Output is a substring sharing the input storage.

## Edge cases

Single characters, an all-equal string, and tied longest palindromes are supported; empty input also returns an empty string.
