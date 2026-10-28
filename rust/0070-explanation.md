# 70. Climbing Stairs

[Official LeetCode problem](https://leetcode.com/problems/climbing-stairs/)

## Problem

Count distinct sequences of one-step or two-step moves that climb n stairs, for 1 ≤ n ≤ 45.

## Example input/output

n=3 → 3: 1+1+1, 1+2, and 2+1.

## Approach

The one-step/two-step recurrence is Fibonacci(n+1). Evaluate it with iterative fast doubling, reading the index bits from high to low and maintaining adjacent Fibonacci values.

## Correctness

The last move gives ways(n)=ways(n−1)+ways(n−2), with ways(0)=ways(1)=1, hence Fibonacci(n+1). For a processed binary prefix k, a=F(k), b=F(k+1). The identities F(2k)=F(k)(2F(k+1)−F(k)) and F(2k+1)=F(k)²+F(k+1)² update this pair for the next zero or one bit. Induction over bits gives the desired Fibonacci value.

## Complexity

O(log(n+1)) time and O(1) auxiliary/output space. i64 accommodates F(47) and all intermediate products reached under n≤45, while the final F(46) fits i32.

## Edge cases

n=1 and n=2 map to the correct small Fibonacci indices; the maximum n=45 is checked without i32 intermediate overflow.
