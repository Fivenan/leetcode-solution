# 70. Climbing Stairs

[LeetCode problem](https://leetcode.com/problems/climbing-stairs/)

## Problem

Count the ways to climb n stairs using steps of one or two, where 1≤n≤45.

## Example

n=3 → 3: 1+1+1, 1+2, 2+1

## Approach

The count equals Fibonacci F(n+1), with F(0)=0 and F(1)=1. Process the bits of n+1 from most significant to least, retaining F(k),F(k+1). Fast-doubling identities compute F(2k)=F(k)·(2F(k+1)−F(k)) and F(2k+1)=F(k)²+F(k+1)². An incoming one bit advances this doubled pair once more.

## Correctness

Every route to stair i ends with a one-step from i−1 or a two-step from i−2, giving the Fibonacci recurrence and the count F(i+1). The doubling identities follow from Fibonacci addition identities. Each processed index bit maps k to 2k or 2k+1 while preserving the retained consecutive Fibonacci pair; after the last bit its first value is F(n+1).

## Complexity

Time: O(log(n+1)) arithmetic operations. Auxiliary space and output: O(1). Under n≤45, int64 holds every intermediate and the final count fits signed 32-bit range.

## Edge cases

n=1 and n=2 give one and two. The implementation also yields one empty route for n=0.
