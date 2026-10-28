# 93. Restore IP Addresses

[Official LeetCode problem](https://leetcode.com/problems/restore-ip-addresses/)

## Problem

Insert three dots into a digit string to form every valid IPv4 address: four decimal components from 0 to 255 with no leading zeroes except the single digit 0.

## Example input/output

"25525511135" → ["255.255.11.135","255.255.111.35"].

## Approach

Backtrack over component lengths one through three, rejecting leading zeroes and values above 255. Prune when remaining characters cannot fill the remaining components.

## Correctness

Every valid address has one sequence of four permitted component lengths, and the recursion explores that sequence. Every emitted component satisfies both numeric and formatting rules, and the length check requires consuming the entire string.

## Complexity

O(3⁴) search time plus O(total output characters), and O(1) bounded auxiliary depth/path storage (four components of at most three digits). Output has at most a constant number of IPv4 strings under this fixed format; inputs longer than 12 are rejected immediately.

## Edge cases

All-zero input yields 0.0.0.0; too few/many digits, 256 components, and forbidden leading zeroes are pruned.
