# 70. Climbing Stairs

[Official problem](https://leetcode.com/problems/climbing-stairs/)

## Problem

Count the distinct sequences of one-step and two-step moves that climb n stairs, for 1 ≤ n ≤ 45.

## Example input/output

n = 3 → 3

## Approach

The answer is Fibonacci number F(n+1), with F(0)=0 and F(1)=1. Compute that number with iterative fast doubling: read the binary digits of n+1 from most significant to least, maintaining adjacent Fibonacci values. For a maintained index k, obtain F(2k)=F(k)·(2F(k+1)-F(k)) and F(2k+1)=F(k)²+F(k+1)², then select the adjacent pair corresponding to the next binary digit.

## Correctness

The last move is either one step from n-1 or two from n-2, so the count obeys the Fibonacci recurrence with one way at height zero and one at height one; hence it is F(n+1). The Fibonacci addition identity gives the two doubling formulas. Initially (a,b)=(F(0),F(1)). A zero bit changes the represented index from k to 2k and selects (F(2k),F(2k+1)); a one bit changes it to 2k+1 and selects (F(2k+1),F(2k)+F(2k+1)). Induction over the bits leaves a=F(n+1).

## Complexity

O(log n) time; O(1) auxiliary space and output, using fixed-width arithmetic. For n≤45, the final maintained pair is at most (F(46),F(47)); F(47)=2,971,215,073 needs long, while the returned F(46) fits int. All doubling products also fit long under this bound.

## Edge cases

One stair, two stairs, and the largest permitted n.
