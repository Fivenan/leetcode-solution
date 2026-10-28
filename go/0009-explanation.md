# 9. Palindrome Number

[LeetCode problem](https://leetcode.com/problems/palindrome-number/)

## Problem

Determine whether the decimal representation of an integer reads the same in both directions, without converting it to a string.

## Example

121 → true; -121 → false

## Approach

Reject negative values and nonzero values ending in zero. Reverse only the trailing half of the digits, then compare the halves, dropping the middle digit for odd lengths.

## Correctness

Reversing the trailing half aligns it with the leading half exactly when all mirrored digits agree. For odd digit counts the unmatched center is irrelevant.

## Complexity

Time: O(log(|x|+1)). Auxiliary space and output: O(1).

## Edge cases

Zero is a palindrome. Negatives and nonzero multiples of ten are not. Half reversal avoids full-reversal overflow.
