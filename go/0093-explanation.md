# 93. Restore IP Addresses

[LeetCode problem](https://leetcode.com/problems/restore-ip-addresses/)

## Problem

Insert three dots into a digit string to make every valid IPv4 address. Each of its four segments must be 0..255 and must not have a leading zero unless the segment is exactly "0".

## Example

"25525511135" → ["255.255.11.135","255.255.111.35"]

## Approach

Backtrack over segment lengths one through three, rejecting leading zeros and values above 255. Prune when remaining digits cannot fit the remaining number of segments.

## Correctness

Every valid address has exactly one sequence of four segment boundaries. The loop explores all allowed lengths, and each rejection corresponds to an explicit IPv4 rule or an impossible remaining length.

## Complexity

Time: O(3⁴) candidate splits plus bounded output construction under four segments of length at most three. Auxiliary space: O(1), excluding bounded output; recursion depth is four.

## Edge cases

All zeros, strings shorter than four or longer than twelve, and a three-digit segment at 255/256 are handled.
