# 77. Combinations

[LeetCode problem](https://leetcode.com/problems/combinations/)

## Problem

Return all size-k combinations chosen from integers 1..n, with 1≤k≤n. Order within a combination is irrelevant.

## Example

n=4, k=2 → [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

## Approach

Backtrack in increasing value order. Limit the next candidate so enough larger values remain to complete the combination.

## Correctness

Increasing choices use each value at most once and give every set a unique representation. The upper bound prunes only prefixes with too few remaining values, which cannot lead to an answer.

## Complexity

Time: O(k·C(n,k)), including copying each result. Auxiliary space: O(k), excluding O(k·C(n,k)) output.

## Edge cases

k=1 and k=n work. The same recursion also returns one empty combination for k=0.
