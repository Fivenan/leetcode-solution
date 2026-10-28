# 51. N-Queens

[Official LeetCode problem](https://leetcode.com/problems/n-queens/)

## Problem

Place n queens on an n×n board so none share a row, column, or diagonal; return every board for positive n.

## Example input/output

n=4 has two solutions, including [".Q..","...Q","Q...","..Q."].

## Approach

Place one queen per row. Boolean arrays track occupied columns and the two diagonal families; store column positions and build strings only for complete boards.

## Correctness

Each accepted placement is conflict-free with earlier rows. Every valid board has exactly one legal column choice in each row, so the search follows its unique path. All completed paths are therefore exactly all valid boards.

## Complexity

A loose bound is O(n·n! + S·n²) time, where S boards are returned: each valid partial placement scans n columns and each output has n² characters. O(n) auxiliary state and O(S·n²) output space.

## Edge cases

n=1 yields one board, while n=2 and n=3 yield none. Positive n makes the 2n−1 diagonal arrays well-defined.
