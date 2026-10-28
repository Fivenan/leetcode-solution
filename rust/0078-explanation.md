# 78. Subsets

[Official LeetCode problem](https://leetcode.com/problems/subsets/)

## Problem

Return every subset of an array of distinct integers, including the empty subset.

## Example input/output

[1,2] → [[],[1],[2],[1,2]].

## Approach

Start with the empty subset. For each value, append a copy of every existing subset with that value added.

## Correctness

Before a step, all subsets of the processed values occur once. New subsets are exactly those containing the new value, each corresponding uniquely to an old subset; the retained originals cover those excluding it.

## Complexity

O(n·2^n) time and O(n·2^n) output space. Temporary state beyond output is O(n) for one subset being built; originals are cloned because each returned subset owns its values independently.

## Edge cases

The empty subset is always included; distinct input values guarantee uniqueness without deduplication.
