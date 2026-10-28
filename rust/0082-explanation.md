# 82. Remove Duplicates from Sorted List II

[Official LeetCode problem](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)

## Problem

From a sorted linked list, remove every value that occurs more than once, retaining only values that appeared exactly once.

## Example input/output

[1,2,3,3,4,4,5] → [1,2,5].

## Approach

Consume one equal-value run at a time. Keep its first node only if no subsequent equal node appears; otherwise drop the entire detached run.

## Correctness

Sorted order makes all occurrences of a value contiguous. The repeated flag therefore identifies exactly runs of length at least two, and appending only singleton runs retains exactly the required values in order.

## Complexity

O(n) time and O(1) auxiliary space. Output reuses surviving boxes; removed nodes are detached and dropped individually without cloning or a recursive traversal stack.

## Edge cases

Duplicate runs at the head or tail, all-duplicate lists, and empty input work.
