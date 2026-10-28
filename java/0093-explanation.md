# 93. Restore IP Addresses

[Official problem](https://leetcode.com/problems/restore-ip-addresses/)

## Problem

Insert three dots into a digit string to form every valid IPv4 address: exactly four decimal parts from 0 through 255, with no leading zero except the single digit zero. Preserve all digits in order.

## Example input/output

s = "25525511135" → ["255.255.11.135","255.255.111.35"]

## Approach

Backtrack over one-, two-, and three-digit parts, rejecting leading zeros and values above 255. Prune when remaining digits cannot fit the remaining parts.

## Correctness

Every valid address has four part lengths between one and three and passes the value/zero rules, so its unique split is explored. Every accepted leaf consumes all digits in four valid parts, hence is a valid address.

## Complexity

O(3⁴) bounded search time, including constructing each bounded-length address; O(1) auxiliary recursion/path space; O(K) output for K addresses of at most 15 characters each. Strings outside length 4..12 are rejected immediately.

## Edge cases

Too few/many digits, all zeros, 255 versus 256, and zero-prefixed multi-digit parts.
