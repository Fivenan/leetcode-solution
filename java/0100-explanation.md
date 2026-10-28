# 100. Same Tree

[Official problem](https://leetcode.com/problems/same-tree/)

## Problem

Decide whether two binary trees have identical structure and equal values at every corresponding node. Either tree may be empty.

## Example input/output

p = [1,2,3], q = [1,2,3] → true

## Approach

Compare nullness and node values, then recursively compare corresponding left and right subtrees.

## Correctness

Two empty trees are equal; one empty and one nonempty tree are unequal. Nonempty trees are equal exactly when their root values match and both corresponding subtree pairs are equal, which is the recursive test.

## Complexity

O(min(n,m)+1) time in the worst case for trees with n and m nodes; comparison stops at the first mismatch. O(h) auxiliary recursion stack on the compared portion; O(1) output.

## Edge cases

Both empty, one empty, same values with different shape, and a mismatch deep in a subtree.
