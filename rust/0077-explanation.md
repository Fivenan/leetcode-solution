# 77. Combinations

[Official LeetCode problem](https://leetcode.com/problems/combinations/)

## Problem

Return every k-element subset of integers 1 through n, for 1 ≤ k ≤ n.

## Example input/output

n=4, k=2 → [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]].

## Approach

Backtrack in increasing value order, stopping the next-choice range early enough to leave room for the remaining required values.

## Correctness

Every k-subset has one increasing ordering, and the recursion explores that ordering. The upper choice bound prunes only prefixes with too few remaining values to finish, so no valid combination is lost.

## Complexity

O(k·C(n,k)) time including copies, O(k) auxiliary recursion/path space, and O(k·C(n,k)) output space.

## Edge cases

k=1 yields each singleton; k=n yields the full range. Outputs are independent path clones.
